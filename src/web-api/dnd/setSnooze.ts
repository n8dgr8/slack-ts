export interface StaticDndSetSnoozeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token: string;

  /**
   * Number of minutes, from now, to snooze until.
   */
  num_minutes: number;
}

export interface DndSetSnoozeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: dnd:write
   */
  token?: string;

  /**
   * Number of minutes, from now, to snooze until.
   */
  num_minutes: number;
}
