export interface StaticTeamProfileGetArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users. profile:read
   */
  token: string;

  /**
   * Filter by visibility.
   */
  visibility?: string;
}

export interface TeamProfileGetArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users. profile:read
   */
  token?: string;

  /**
   * Filter by visibility.
   */
  visibility?: string;
}
