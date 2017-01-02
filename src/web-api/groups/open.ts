export interface StaticGroupsOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to open.
   */
  channel: string;
}

export interface GroupsOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to open.
   */
  channel: string;
}
