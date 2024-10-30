'use client';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateExcelFormula = async (prompt: string) => {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Generate an Excel formula for: ${prompt}`,
        max_tokens: 100,
      });
      setResponse(completion.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error generating formula:', error);
      setResponse('Error generating formula');
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      generateExcelFormula(inputValue);
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
          {response && (
            <div className="flex justify-start">
              <div className="bg-green-200 text-green-800 px-4 py-2 rounded-lg max-w-xs md:max-w-sm break-words shadow-md">
                {response}
              </div>
            </div>
          )}
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
