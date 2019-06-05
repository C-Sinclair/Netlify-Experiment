import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import useSiteMetadata from './Metadata'
import '../styles/global.sass'

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{ title }</title>
                <meta name="description" content={ description } />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/apple-touch-icon.png"
                    />
         
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={ title } />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <Navbar />
            <Sidebar />
            <div>{ children }</div>
            <Footer />
        </div>
    )
}

export default Layout