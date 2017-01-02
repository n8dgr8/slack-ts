export interface StaticChatPostMessageArguments {
  /**
   * Authentication token.
   *
   * Requires scope: chat:write:bot or chat:write:user
   */
  token: string;

  /**
   * Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.
   */
  channel: string;

  /**
   * Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.
   */
  text: string;

  /**
   * Change how messages are treated. Defaults to none. See below.
   */
  parse?: string;

  /**
   * Find and link channel names and usernames.
   */
  link_names?: boolean;

  /**
   * Structured message attachments.
   */
  attachments?: string;

  /**
   * Pass true to enable unfurling of primarily text-based content.
   */
  unfurl_links?: boolean;

  /**
   * Pass false to disable unfurling of media content.
   */
  unfurl_media?: boolean;

  /**
   * Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  username?: string;

  /**
   * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.
   */
  as_user?: boolean;

  /**
   * URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  icon_url?: string;

  /**
   * emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  icon_emoji?: string;
}

export interface ChatPostMessageArguments {
  /**
   * Authentication token.
   *
   * Requires scope: chat:write:bot or chat:write:user
   */
  token?: string;

  /**
   * Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.
   */
  channel: string;

  /**
   * Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.
   */
  text: string;

  /**
   * Change how messages are treated. Defaults to none. See below.
   */
  parse?: string;

  /**
   * Find and link channel names and usernames.
   */
  link_names?: boolean;

  /**
   * Structured message attachments.
   */
  attachments?: string;

  /**
   * Pass true to enable unfurling of primarily text-based content.
   */
  unfurl_links?: boolean;

  /**
   * Pass false to disable unfurling of media content.
   */
  unfurl_media?: boolean;

  /**
   * Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  username?: string;

  /**
   * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.
   */
  as_user?: boolean;

  /**
   * URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  icon_url?: string;

  /**
   * emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.
   */
  icon_emoji?: string;
}
