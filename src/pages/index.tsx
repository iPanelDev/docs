import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';
import HomepageImages from '../components/HomepageImages';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.png" alt="logo" className={styles.logo} />
        <Heading as="h1" className="hero__title">
          iPanel
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/guide/quickStart">
            查看文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="WELCOME" description={siteConfig.tagline}>
      <div className={styles['fisrt-container']}>
        <HomepageHeader />
        <HomepageFeatures />
      </div>
      <HomepageImages />
    </Layout>
  );
}
