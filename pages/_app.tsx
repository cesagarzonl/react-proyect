import '../styles/globals.css'

import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ApolloProvider } from 'react-apollo';
import withApollo from "../hooks/withApollo"
import ApolloClient, { InMemoryCache, NormalizedCacheObject } from "apollo-boost"


export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}; 
  }
`

// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

// adds our custom props interface to the generic App base class.
class MyApp extends App<IProps> {
  render() {
    // instead of creating a client here, we use the rehydrated apollo client provided by our own withApollo provider. 
    const { Component, pageProps, apollo } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </React.Fragment>
    )
  }
}

export default withApollo(MyApp)
