from django.apps import AppConfig


class CandidatesConfig(AppConfig):
    name = 'candidates'

    def ready(self):
        import candidates.signals
