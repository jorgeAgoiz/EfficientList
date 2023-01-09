import { addDoc } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import { NewDocument } from '../../../types/firebase'
import { apiResponseParser } from '../../../utils/apiResponseParser'
import { OPENAI_API_KEY } from '../../../utils/constants'
import { dbInstance } from '../../../utils/firebaseConfig'

// OPENAI API
const configuration: Configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})
const openai: OpenAIApi = new OpenAIApi(configuration)

// NEXT HANDLER
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { theme, user } = req.body

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer in spanish. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"No lo se\".\n\nQ: Hazme una checklist de cinco propositos para ${theme}\n\nA:`,
      temperature: 0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    })

    const { choices } = response.data

    if (choices.length <= 0) {
      throw new Error('No results.')
    }

    const result = choices[0].text!
    const finalSentences = apiResponseParser(result)

    const newDocument: NewDocument = {
      list: theme,
      rows: finalSentences,
      user,
      createdAt: new Date(Date.now()),
    }

    await addDoc(dbInstance, newDocument)

    return res.status(200).json({ result: finalSentences, success: true })
  } catch (err: any) {
    return res.status(err.response?.status || 500).json({
      message: err.message,
      status: err.response?.status || 500,
      success: false,
    })
  }
}
