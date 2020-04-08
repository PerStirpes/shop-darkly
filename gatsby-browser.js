import { ApolloProvider } from 'react-apollo'
import React from 'react'

const client = {}
// 'element' is missing in props validationeslint(react/prop-types)
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>
