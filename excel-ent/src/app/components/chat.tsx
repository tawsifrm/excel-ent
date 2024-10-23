'use client';
import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Chat Container */}
      <div className="flex-1 mt-16 w-full max-w-4xl p-6 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`${
                  index % 2 === 0
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-blue-500 text-white'
                } px-4 py-2 rounded-lg max-w-xs md:max-w-sm break-words shadow-md`}
              >
                {message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="w-full bg-white py-4 px-6 flex items-center shadow-inner">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
