export interface StaticTeamInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: team:read
   */
  token: string;
}

export interface TeamInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: team:read
   */
  token?: string;
}
