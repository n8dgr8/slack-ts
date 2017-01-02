export interface StaticGroupsSetPurposeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}

export interface GroupsSetPurposeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}
