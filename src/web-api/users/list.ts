export interface StaticUsersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token: string;

  /**
   * Whether to include presence data in the output
   */
  presence?: boolean;
}

export interface UsersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token?: string;

  /**
   * Whether to include presence data in the output
   */
  presence?: boolean;
}
