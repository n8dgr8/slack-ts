export interface StaticUsersIdentityArguments {
  /**
   * Authentication token.
   *
   * Requires scope: identity. basic
   */
  token: string;
}

export interface UsersIdentityArguments {
  /**
   * Authentication token.
   *
   * Requires scope: identity. basic
   */
  token?: string;
}
