// https://github.com/import-js/eslint-plugin-import/issues/2802
// eslint-disable-next-line import/no-unresolved
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// eslint-disable-next-line import/no-unresolved
import Link from '@docusaurus/Link'
// eslint-disable-next-line import/no-unresolved
import Heading from '@theme/Heading'
// eslint-disable-next-line import/no-unresolved
import CodeBlock from '@theme/CodeBlock'
// eslint-disable-next-line import/no-unresolved
import Layout from '@theme/Layout'
import { clsx } from 'clsx'
import styles from './index.module.css'

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img src="/.svg" width="200px" /> */}
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className="button button--secondary button--lg" to={'/guide'}>
          立即尝试
        </Link>
      </div>
    </header>
  )
}

// eslint-disable-next-line import/no-default-export
export default () => (
  <Layout>
    <HomepageHeader />
    <main>
      <section>
        <div className={clsx('container', styles.container)}>
          <h2>快速开始</h2>
          <p>将 MP3 转换为 SILK：</p>
          <CodeBlock language="sh">ffmpeg -i my.mp3 my.ntsilk</CodeBlock>
          <p>将 SILK 转换为 MP3：</p>
          <CodeBlock language="sh">ffmpeg -i my.ntsilk my.mp3</CodeBlock>
        </div>
      </section>
    </main>
  </Layout>
)
