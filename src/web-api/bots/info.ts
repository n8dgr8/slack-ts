export interface StaticBotsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token: string;

  /**
   * Bot user to get info on
   */
  bot?: string;
}

export interface BotsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users:read
   */
  token?: string;

  /**
   * Bot user to get info on
   */
  bot?: string;
}
