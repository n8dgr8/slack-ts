export interface StaticUsergroupsDisableArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token: string;

  /**
   * The encoded ID of the User Group to disable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}

export interface UsergroupsDisableArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token?: string;

  /**
   * The encoded ID of the User Group to disable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}
