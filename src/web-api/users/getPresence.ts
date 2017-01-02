export interface StaticUsersGetPresenceArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token: string;

  /**
   * User to get presence info on. Defaults to the authed user.
   */
  user: string;
}

export interface UsersGetPresenceArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token?: string;

  /**
   * User to get presence info on. Defaults to the authed user.
   */
  user: string;
}
