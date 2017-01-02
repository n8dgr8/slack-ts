export interface StaticGroupsCreateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Name of private channel to create
   */
  name: string;
}

export interface GroupsCreateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Name of private channel to create
   */
  name: string;
}
