import React from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '@/styles/global'

function App({ Component, pageProps }: AppPropsType): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
