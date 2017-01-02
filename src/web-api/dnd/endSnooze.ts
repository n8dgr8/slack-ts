export interface StaticDndEndSnoozeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token: string;
}

export interface DndEndSnoozeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token?: string;
}
