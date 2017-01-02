export interface StaticGroupsSetTopicArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}

export interface GroupsSetTopicArguments {
  /**
   * Authentication token.
   *
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}
