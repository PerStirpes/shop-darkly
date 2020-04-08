import React from 'react'
import { Heading, Text, TextContainer } from '../components/shared/Typography'

const NotFoundPage = () => (
  <TextContainer>
    <Heading>Whoops - That Page Doesn’t Exist (404)</Heading>
    <Text>
      Questions? Concerns? Neuroses? If you think this is an error or ended up at this page by following a link, please{' '}
      <a href="https://github.com/perstirpes/shop-darkly/issues/new">open an issue</a>. PRs Welcome 🙃
    </Text>
  </TextContainer>
)

export default NotFoundPage
