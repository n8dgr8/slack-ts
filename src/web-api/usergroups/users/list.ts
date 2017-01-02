export interface StaticUsergroupsUsersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:read
   */
  token: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * Allow results that involve disabled User Groups.
   */
  include_disabled?: boolean;
}

export interface UsergroupsUsersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:read
   */
  token?: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * Allow results that involve disabled User Groups.
   */
  include_disabled?: boolean;
}
