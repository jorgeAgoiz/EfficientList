import { useRouter } from 'next/router'
import { useState } from 'react'

interface State {
  error: boolean
}
interface UseDelete {
  handleDelete: (id: string) => void
  error: boolean
}

const useDelete = (): UseDelete => {
  const router = useRouter()
  const [error, setError] = useState<State['error']>(false)

  const handleDelete = (id: string) => {
    if (!id) return
    setError(false)

    fetch(`/api/list/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((value) => {
        if (value.success) {
          return router.push('/historic')
        }
        setError(true)
      })
      .catch(() => setError(true))
  }

  return {
    handleDelete,
    error,
  }
}

export default useDelete
