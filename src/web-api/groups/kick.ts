export interface StaticGroupsKickArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from private channel.
   */
  user: string;
}

export interface GroupsKickArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from private channel.
   */
  user: string;
}
