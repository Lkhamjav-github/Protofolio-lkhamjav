import { Loading } from '@/components/Loading'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div>
      {
        loading ? <Loading /> : <Component {...pageProps} />
      }
    </div>
  )
}
