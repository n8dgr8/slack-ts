export interface StaticUsergroupsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:read
   */
  token: string;

  /**
   * Include disabled User Groups.
   */
  include_disabled?: boolean;

  /**
   * Include the number of users in each User Group.
   */
  include_count?: boolean;

  /**
   * Include the list of users for each User Group.
   */
  include_users?: boolean;
}

export interface UsergroupsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: usergroups:read
   */
  token?: string;

  /**
   * Include disabled User Groups.
   */
  include_disabled?: boolean;

  /**
   * Include the number of users in each User Group.
   */
  include_count?: boolean;

  /**
   * Include the list of users for each User Group.
   */
  include_users?: boolean;
}
