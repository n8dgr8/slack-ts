export interface StaticRemindersInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:read
   */
  token: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}

export interface RemindersInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:read
   */
  token?: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}
