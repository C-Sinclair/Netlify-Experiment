import React from "react"
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo"

import store from "./src/redux/store"
import client from "./src/apollo/client"

export const rootWrap = ({ element }) => {
    <Provider store={store}>
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
    </Provider>
}
