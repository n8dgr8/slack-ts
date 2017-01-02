export interface StaticUsersInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token: string;

  /**
   * User to get info on
   */
  user: string;
}

export interface UsersInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token?: string;

  /**
   * User to get info on
   */
  user: string;
}
