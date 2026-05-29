import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Legal Literacy for Kids</h1>
          <p className="hero__subtitle">
            A free, open curriculum that teaches ages 8–12 how rules, contracts, and legal systems actually work.
          </p>
          <p className={styles.heroLead}>
            18 core weeks, plus optional advanced weeks, designed for classrooms,
            homeschool families, after-school clubs, and any adult who wants to help
            kids move from seeing rules as arbitrary restrictions to understanding law
            as the operating system of society. Most weeks use two guided sessions and
            one independent practice, for about 60–90 minutes total.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/literacy-for-kids/legal_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustration of children learning about rights, rules, fairness, and justice."
            width="1536"
            height="1024"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A free, open curriculum with 18 core weeks and optional advanced weeks that teaches ages 8–12 how rules, contracts, and legal systems work.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
