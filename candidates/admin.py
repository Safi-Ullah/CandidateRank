from django.contrib import admin
from .models import Candidate, CandidateTestScore


class CandidateTestScoreAdmin(admin.ModelAdmin):
    """
    Candidate test score admin.
    """
    list_display = ('candidate', 'logic_test_score')
    list_filter = ('job', )


admin.site.register(Candidate)
admin.site.register(CandidateTestScore, CandidateTestScoreAdmin)
