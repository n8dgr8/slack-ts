export interface StaticDndInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:read
   */
  token: string;

  /**
   * User to fetch status for (defaults to current user)
   */
  user?: string;
}

export interface DndInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:read
   */
  token?: string;

  /**
   * User to fetch status for (defaults to current user)
   */
  user?: string;
}
