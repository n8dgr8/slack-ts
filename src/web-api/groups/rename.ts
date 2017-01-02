export interface StaticGroupsRenameArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to rename
   */
  channel: string;

  /**
   * New name for private channel.
   */
  name: string;
}

export interface GroupsRenameArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to rename
   */
  channel: string;

  /**
   * New name for private channel.
   */
  name: string;
}
