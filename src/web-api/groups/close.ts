export interface StaticGroupsCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to close.
   */
  channel: string;
}

export interface GroupsCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to close.
   */
  channel: string;
}
