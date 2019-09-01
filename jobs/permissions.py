from rest_framework.permissions import BasePermission

from common.utils import is_hiring_team_member


class HasListJobsPermission(BasePermission):
    """
    Defines permission whether requester can retrieve jobs' list.
    """

    def has_permission(self, request, view):
        """
        Allow if requesting user belongs to hiring team.
        :param request:
        :param view:
        :return:
        """
        return is_hiring_team_member(request.user)
