export interface StaticRemindersCompleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:write
   */
  token: string;

  /**
   * The ID of the reminder to be marked as complete
   */
  reminder: string;
}

export interface RemindersCompleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reminders:write
   */
  token?: string;

  /**
   * The ID of the reminder to be marked as complete
   */
  reminder: string;
}
