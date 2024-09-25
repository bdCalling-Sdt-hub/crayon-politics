import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// but configure it to point to perplexity.ai
const perplexity = new OpenAI({
  apiKey: "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",
  baseURL: 'https://api.perplexity.ai/',
});

export async function POST(req: Request) {

    const { messages } = await req.json();

    // Ask Perplexity for a streaming chat completion using PPLX 70B online model
    const response = await perplexity.chat.completions.create({
      model: 'mistral-7b-instruct',
        stream: true,
        max_tokens: 1000,
        messages,
    });

  // Convert the response into a friendly text-stream.
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}