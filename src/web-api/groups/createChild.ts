export interface StaticGroupsCreateChildArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to clone and archive.
   */
  channel: string;
}

export interface GroupsCreateChildArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to clone and archive.
   */
  channel: string;
}
