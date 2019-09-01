from .enums import Groups


def is_hiring_team_member(user):
    return user.groups.filter(name=Groups.HIRING_TEAM.value).exists()
