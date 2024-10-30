import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateExcelFormula = async (prompt: string): Promise<string> => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate an Excel formula for: ${prompt}`,
      max_tokens: 100,
    });
    return completion.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating formula:', error);
    return 'Error generating formula';
  }
};
