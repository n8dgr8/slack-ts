export interface StaticDndEndDndArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token: string;
}

export interface DndEndDndArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token?: string;
}
