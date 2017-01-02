export interface StaticUsergroupsEnableArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token: string;

  /**
   * The encoded ID of the User Group to enable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}

export interface UsergroupsEnableArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token?: string;

  /**
   * The encoded ID of the User Group to enable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}
