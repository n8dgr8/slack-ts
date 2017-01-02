export interface StaticGroupsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:read
   */
  token: string;

  /**
   * Private channel to get info on
   */
  channel: string;
}

export interface GroupsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:read
   */
  token?: string;

  /**
   * Private channel to get info on
   */
  channel: string;
}
