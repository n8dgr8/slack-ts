export interface StaticRemindersDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:write
   */
  token: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}

export interface RemindersDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:write
   */
  token?: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}
