import { AppLevelListeners } from '@ikea/components/atoms/AppLevelListeners'
import { ChatWindow } from '@ikea/components/organisms/ChatWindow'
import { Notifications } from '@ikea/components/organisms/Notifications'
import Layout from '@ikea/components/templates/Layout'
import { ApolloProvider } from '@ikea/config/network/apollo'
import { ReduxProvider } from '@ikea/store/provider'
import '@ikea/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <ChatWindow />
        <Layout>
          <AppLevelListeners />
          <Component {...pageProps} />
          <Notifications />
        </Layout>
      </ApolloProvider>
    </ReduxProvider>
  )
}
