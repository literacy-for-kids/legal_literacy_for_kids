import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {hub, curricula} from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const features = [
  {
    title: 'The Rule of Law is System Stability',
    description:
      'Students contrast Rule of Law (predictable, objective) with Rule of Man (arbitrary) to understand why predictability allows societies to scale.',
  },
  {
    title: 'Contracts are Interface Specifications',
    description:
      'Students learn the anatomy of a promise: Offer (the input), Acceptance (the handshake), and Consideration (the payload/value exchanged).',
  },
  {
    title: 'Precedent is Version Control',
    description:
      'Students learn how courts look at past decisions to patch bugs and update the law incrementally, ensuring forward compatibility.',
  },
  {
    title: 'The Letter vs. The Intent',
    description:
      'Students explore the friction between what a rule says literally and what the system actually needs — identifying loopholes and bad incentives.',
  },
  {
    title: 'Rights are System Firewalls',
    description:
      'Rights are hardcoded boundaries — constraints on institutional power that prevent the network from overriding the individual node.',
  },
];

const roadmapSections = [
  {
    title: 'The Architecture of Rules',
    weeks: 'Weeks 1–3',
    description: 'Chaos, order, and the baseline need for law',
  },
  {
    title: 'The Anatomy of a Promise',
    weeks: 'Weeks 4–7',
    description: 'Contracts, consideration, and accountability',
  },
  {
    title: 'Debugging the Code',
    weeks: 'Weeks 8–10',
    description: 'Interpretation, loopholes, and precedent',
  },
  {
    title: 'The Governance Project',
    weeks: 'Weeks 11–14',
    description: 'Rights, distributed power, and charter design',
  },
  {
    title: 'The Justice System in Action',
    weeks: 'Weeks 15–18',
    description: 'Courts, due process, and mock proceedings',
  },
];

const currentSiteHref = 'https://literacy-for-kids.github.io/legal_literacy_for_kids/';

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function LiteracyCard({label, href, description, isCurrent}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">
        <Link href={href} className={styles.literacyLink}>
          {label}
        </Link>
        {isCurrent && <span className={styles.currentBadge}>Current curriculum</span>}
      </Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Legal Literacy for Kids is an 18-week core curriculum for ages 8–12, with
            optional advanced weeks, built for classroom teachers, homeschool families,
            caregivers, and after-school leaders.
            Students move from understanding why rules exist through contract writing,
            legal interpretation, and a full mock trial — learning to see law as the
            operating system of human society.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Ecosystem</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of{' '}
            <Link href={hub.href}>{hub.label}</Link>
            , a collection of open-source curricula designed to help children
            ages 8–12 understand the systems that shape the modern world.
          </p>
          <div className={styles.callout}>
            <Heading as="h3">Explore the other literacies</Heading>
            <div className={styles.cardGrid}>
              {curricula.map((literacy) => (
                <LiteracyCard
                  key={literacy.href}
                  {...literacy}
                  isCurrent={literacy.href === currentSiteHref}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around mental models that help students transition from
            seeing rules as arbitrary restrictions to viewing them as structural engineering
            for group behavior.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from the theoretical need for rules through
            contract design, legal interpretation, rights and governance, and culminates
            in a full mock trial capstone.
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Legal Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Legal Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with the Welcome page for an overview, then jump into Week 1.
            Each week includes two guided sessions and one independent practice.
            Younger learners may use 20-minute chunks; older learners often use 30-minute sessions.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/legal_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
