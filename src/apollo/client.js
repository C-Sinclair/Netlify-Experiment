import ApolloClient from "apollo-client"
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-client-preset'
import fetch from "isomorphic-fetch"
import store from './redux/store'

const uri = "/.netlify/functions/graphql"

const httpLink = createHttpLink({
    uri,
    credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
    let token = null
    const { user } = store.getState().user
    if (user) token = user.token
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    fetch
})

export default client