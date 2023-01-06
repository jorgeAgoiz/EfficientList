import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "../utils/constants";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const openAiRequest = async () => {

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
    });
    return response
}
