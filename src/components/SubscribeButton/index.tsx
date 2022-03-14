import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const session = useSession()
  const router = useRouter()

  const [isLoading, setLoading] = useState(false)

  async function handleSubscribe() {
    if (session.status === 'unauthenticated') {
      signIn('github')
      return
    }

    if (session.data.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      setLoading(true)
      const response = await api.post('/subscribe', { priceId })

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({
        sessionId,
      })
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleSubscribe()}
      disabled={!!isLoading}
      className={styles.subscribeButton}
    >
      {isLoading && <AiOutlineLoading3Quarters className={styles.animation} />}
      Subscribe now
    </button>
  )
}
