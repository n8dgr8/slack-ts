export interface StaticGroupsUnarchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to unarchive
   */
  channel: string;
}

export interface GroupsUnarchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to unarchive
   */
  channel: string;
}
