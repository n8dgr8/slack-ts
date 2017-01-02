export interface StaticGroupsInviteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to invite user to.
   */
  channel: string;

  /**
   * User to invite.
   */
  user: string;
}

export interface GroupsInviteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to invite user to.
   */
  channel: string;

  /**
   * User to invite.
   */
  user: string;
}
