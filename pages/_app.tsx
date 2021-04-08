import "./styles/globals.scss"
import { Fragment } from "react"
import Head from "next/head"
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="wrapper">
          <nav>
            <span>AtarashiiSekai</span>
            <ul>
              <Link href="https://discord.gg/3QMgZqxDk8">Discord</Link>
              <Link href="about">Tentang Kami</Link>
              <Link href="https://app.atarashisekai.site">Masuk</Link>
            </ul>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
