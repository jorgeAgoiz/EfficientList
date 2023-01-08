import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import { apiResponseParser } from '../../../utils/apiResponseParser'
import { OPENAI_API_KEY } from '../../../utils/constants'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { theme } = req.body

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer in spanish. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"No lo se\".\n\nQ: Hazme una checklist de cinco propositos para ${theme}\n\nA:`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    })

    const result = response.data.choices[0].text!
    const finalSentences = apiResponseParser(result)
    res.status(200).json({ result: finalSentences, success: true })
  } catch (err: any) {
    return res
      .status(err.response.status)
      .json({
        message: err.message,
        status: err.response.status,
        success: false,
      })
  }
}
