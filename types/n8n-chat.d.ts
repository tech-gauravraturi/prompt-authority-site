declare module '@n8n/chat' {
  interface I18nStrings {
    title?: string;
    subtitle?: string;
    inputPlaceholder?: string;
    getStarted?: string;
    closeButtonTooltip?: string;
  }

  interface ChatOptions {
    webhookUrl: string;
    target?: string;
    mode?: 'window' | 'fullscreen';
    showWelcomeScreen?: boolean;
    defaultLanguage?: string;
    initialMessages?: string[];
    i18n?: {
      en?: I18nStrings;
      [key: string]: I18nStrings | undefined;
    };
  }

  export function createChat(options: ChatOptions): void;
}

declare module '@n8n/chat/style.css';