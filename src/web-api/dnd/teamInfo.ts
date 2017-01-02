export interface StaticDndTeamInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:read
   */
  token: string;

  /**
   * Comma-separated list of users to fetch Do Not Disturb status for
   */
  users?: string;
}

export interface DndTeamInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:read
   */
  token?: string;

  /**
   * Comma-separated list of users to fetch Do Not Disturb status for
   */
  users?: string;
}
