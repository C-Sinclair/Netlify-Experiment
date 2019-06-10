import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./src/apollo/client"

export const rootWrap = ({ element }) => {
    <ApolloProvider client={client}>{element}</ApolloProvider>
}
