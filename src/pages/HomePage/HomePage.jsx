//import { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';

import '@chatscope/chat-ui-kit-react'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

import axios from 'axios';
import './HomePage.scss'; 

const HomePage = () => {
    
    const API_KEY = "sk-proj-RrLQbtcdMopc7bzVrPVlT3BlbkFJllmp7IAqwUiCTSBTP52J"

    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm ChatGPT! Ask me anything!",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      const processMessageToChatGPT = async (chatMessages) => {
        let apiMessages = chatMessages.map((messageObject) => {
          let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
          return { role: role, content: messageObject.message };
        });
    
        const systemMessage = { role: "system", content: "System message" };
    
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,
            ...apiMessages
          ]
        }
    
        try {
          const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            apiRequestBody,
            {
              headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
              }
            }
          );
          
          const data = response.data;
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        } catch (error) {
          console.error("Error processing message:", error);
          setIsTyping(false);
        }
      }
    
      return (
        <div className="App">
          <div style={{ position:"relative", height: "800px", width: "700px"  }}>
            <MainContainer>
              <ChatContainer>       
                <MessageList 
                  scrollBehavior="smooth" 
                  typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                >
                  {messages.map((message, i) => {
                    console.log(message)
                    return <Message key={i} model={message} />
                  })}
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={handleSend} />        
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      );
    }

export default HomePage;