export interface StaticUsersSetPresenceArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:write
   */
  token: string;

  /**
   * Either auto or away
   */
  presence: string;
}

export interface UsersSetPresenceArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:write
   */
  token?: string;

  /**
   * Either auto or away
   */
  presence: string;
}
