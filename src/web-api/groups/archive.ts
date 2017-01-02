export interface StaticGroupsArchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to archive
   */
  channel: string;
}

export interface GroupsArchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to archive
   */
  channel: string;
}
