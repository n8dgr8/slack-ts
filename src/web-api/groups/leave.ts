export interface StaticGroupsLeaveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to leave
   */
  channel: string;
}

export interface GroupsLeaveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to leave
   */
  channel: string;
}
