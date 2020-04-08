import { ApolloProvider } from 'react-apollo'
import React from 'react'

const client = {}
export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>

export const onRouteUpdate = () => {
  window.amplitude.getInstance().logEvent('Page Viewed', {
    title: window.document.title,
    location: window.location
      ? window.location.pathname + window.location.search + window.location.hash
      : window.clientInformation,
    referrer: window.document.referrer,
  })
}
