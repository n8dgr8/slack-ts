export interface StaticUsersSetActiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:write
   */
  token: string;
}

export interface UsersSetActiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:write
   */
  token?: string;
}
