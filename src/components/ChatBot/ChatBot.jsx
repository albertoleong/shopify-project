import { useState } from 'react';
import axios from 'axios';
import './ChatBot.scss'; 
// import dotenv from 'dotenv'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    //const apiKey = process.env.API_KEY
    const theApiKey = "sk-proj-cTPZo5nuryV9DTQkpmQTT3BlbkFJpAyZo2msfS0FseYrsKck"

    const handleMessageSend = async () => {
        if (input.trim() === '') return;
        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await axios.post(
              'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: 'user', content: input }],
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${theApiKey}`,
                },
            }
        );

        const botResponse = response.data.choices[0].message.content
        const newMessagesWithResponse = [...newMessages, { text: botResponse, sender: 'bot' }];
        setMessages(newMessagesWithResponse);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
    <div className="chat">
        <h1 className='chat__title'>How can we help?</h1>
        <div className="chat__message">
            {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                {message.text}
            </div>
            ))}
        </div>
        <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className='chat__input'
        />
        <button onClick={handleMessageSend} className='chat__button'>Send</button>
    </div>
  );
};

export default ChatBot;