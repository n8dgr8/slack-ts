export interface StaticRemindersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:read
   */
  token: string;
}

export interface RemindersListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:read
   */
  token?: string;
}
