export interface StaticUsergroupsUsersUpdateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
   */
  users: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}

export interface UsergroupsUsersUpdateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:write
   */
  token?: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
   */
  users: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}
