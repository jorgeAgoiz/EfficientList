import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'

interface State {
  progress: number
  loading: boolean
  listId: string | null
  error: boolean
}
interface UseRequest {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  listId: string | null
  progress: number
  loading: boolean
  error: boolean
}

const useRequest = (): UseRequest => {
  const { data: session } = useSession()
  const [listId, setListId] = useState<State['listId']>(null)
  const [progress, setProgress] = useState<State['progress']>(10)
  const [loading, setLoading] = useState<State['loading']>(false)
  const [error, setError] = useState<State['error']>(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setProgress(10)
    setError(false)
    setListId(null)
    setLoading(true)
    const theme: string = event.currentTarget.theme.value
    setTimeout(() => setProgress(40), 600)
    setTimeout(() => setProgress(80), 1200)
    fetch('/api/openai-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme, user: session?.user?.email }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (!data.success && data.status !== 200) {
          setError(true)
        } else {
          setListId(data.id)
        }
        setLoading(false)
      })
  }

  return {
    handleSubmit,
    listId,
    progress,
    loading,
    error,
  }
}

export default useRequest
