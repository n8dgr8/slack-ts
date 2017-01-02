export interface StaticGroupsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:read
   */
  token: string;

  /**
   * Don't return archived private channels.
   */
  exclude_archived?: boolean;
}

export interface GroupsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:read
   */
  token?: string;

  /**
   * Don't return archived private channels.
   */
  exclude_archived?: boolean;
}
