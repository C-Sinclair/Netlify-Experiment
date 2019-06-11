export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("nxUser")
        ? JSON.parse(window.localStorage.getItem("nxUser"))
        : {}

const setUser = user => window.localStorage.setItem("nxUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
    // get name etc
    const name = ""
    return setUser({
        username,
        name
    })
}
