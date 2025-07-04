import React from 'react';
import styles from './ChatMessages.module.scss';
import { IMessage } from '@/interfaces';
import { ChatBubble } from './chatBubble/ChatBubble';

interface ChatMessages {
  messages: IMessage[];
}

export const ChatMessages: React.FC<ChatMessages> = (props) => {
  return <div className={styles.messagesContainer}>
    {props.messages.map((message, index) => <ChatBubble key={index} role={message.role} content={message.content} />)}
  </div>
}
