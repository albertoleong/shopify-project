import { useState } from 'react';
import axios from 'axios';
import './HomePage.scss'; 

const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const API_KEY = "sk-proj-RrLQbtcdMopc7bzVrPVlT3BlbkFJllmp7IAqwUiCTSBTP52J"

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
                'Authorization': `Bearer ${API_KEY}`,
            },
            }
        );

        const botResponse = response.data.choices[0].text.trim();
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
    <div className="chat-container">
        <div className="message-container">
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
            style={{ width: '100%', marginTop: '10px' }}
        />
        <button onClick={handleMessageSend} style={{ marginTop: '10px' }}>Send</button>
    </div>
  );
};

export default HomePage;