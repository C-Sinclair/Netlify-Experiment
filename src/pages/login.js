import React from "react"
import { connect } from "react-redux"
import { FaGithubAlt as Face } from "react-icons/fa"
import Layout from "../components/Layout"

const Login = ({ user, dispatch }) => (
    <Layout>
        <h1>Welcome back {user.name}</h1>
    </Layout>
)

export default connect(
    state => ({
        user: state.app.user
    }),
    null
)(Login)
