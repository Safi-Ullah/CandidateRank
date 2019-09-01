import csv
import logging
import os

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.conf import settings

from candidates.serializers import CandidateTestScoreSerializer

__author__ = 'Safi'

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    """
    Management command to import candidate's data.
    """
    help = "Import candidates data from .csv file, stored at the project's root directory"

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Indicates the file to read within the project directory')

    def handle(self, *args, **options):
        file_name = options.get('csv_file', 'candidate_data')

        try:
            file_path = os.path.join(settings.BASE_DIR, file_name)
            with open(file_path) as candidates_file:

                candidates_data = csv.DictReader(candidates_file)

                candidates = [{
                    'candidate': {
                        'first_name': candidate.get('first_name'),
                        'last_name': candidate.get('last_name'),
                        'email': candidate.get('email')
                    },
                    'job': {
                        'title': candidate.get('job')
                    },
                    'logic_test_score': candidate.get('logic_test_score')
                } for candidate in candidates_data]

            candidate_test_serializer = CandidateTestScoreSerializer(data=candidates, many=True)

            if candidate_test_serializer.is_valid(raise_exception=True):
                candidate_test_serializer.save()

        except Exception:
            logger.exception('Error importing candidates')
