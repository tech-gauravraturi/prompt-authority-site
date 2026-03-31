'use client';

import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';

export default function BookingChat(): JSX.Element {
  const initialized = useRef<boolean>(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    import('@n8n/chat').then(({ createChat }) => {
      createChat({
        webhookUrl: 'https://n8n-q18l.onrender.com/webhook/9b533971-6b1f-46b5-845f-beaa4b2b2b9a/chat',
        target: '#n8n-chat-container',
        mode: 'window',
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Hi there! I am your scheduling assistant.',
          'I can help you book a meeting with our team. What is your name?'
        ],
        i18n: {
          en: {
            title: 'Book a Meeting',
            subtitle: 'Chat with our assistant to schedule a call',
            inputPlaceholder: 'Type your message...',
            getStarted: 'Start Chatting',
            closeButtonTooltip: 'Close chat'
          }
        }
      });
    });
  }, []);

  return (
    <div
      id="n8n-chat-container"
      style={{ width: '100%', height: '600px' }}
    />
  );
}