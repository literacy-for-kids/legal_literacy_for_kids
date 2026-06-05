// @ts-check

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const currentSiteHref = 'https://literacy-for-kids.github.io/legal_literacy_for_kids/';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'The Architecture of Rules',
      description: 'Weeks 1–3: Chaos, order, and the baseline need for law',
      collapsed: false,
      items: [
        'week01-why-rules-exist',
        'week02-the-tragedy-of-the-commons',
        'week03-the-island-boot',
      ],
    },
    {
      type: 'category',
      label: 'The Anatomy of a Promise',
      description: 'Weeks 4–7: Contracts, consideration, and accountability',
      items: [
        'week04-what-is-a-contract',
        'week05-offer-and-acceptance',
        'week06-consideration',
        'week07-the-chores-api',
      ],
    },
    {
      type: 'category',
      label: 'Debugging the Code',
      description: 'Weeks 8–10: Interpretation, loopholes, and precedent',
      items: [
        'week08-letter-vs-intent',
        'week09-loopholes',
        'week10-the-precedent-protocol',
      ],
    },
    {
      type: 'category',
      label: 'The Governance Project',
      description: 'Weeks 11–14: Rights, distributed power, and charter design',
      items: [
        'week11-rights-as-firewalls',
        'week12-checks-and-balances',
        'week13-the-micro-charter',
        'week14-stress-testing',
      ],
    },
    {
      type: 'category',
      label: 'The Justice System in Action',
      description: 'Weeks 15–18: Courts, due process, and mock proceedings',
      items: [
        'week15-how-courts-work',
        'week16-due-process',
        'week17-the-mock-trial',
        'week18-verdict-and-reflection',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      description: 'Optional extension weeks',
      items: [
        'week-optional-1-criminal-vs-civil',
        'week-optional-2-international-law',
      ],
    },
    'curriculum-overview',
    'legal-systems-cycle',
    'glossary',
    {
      type: 'category',
      label: 'Facilitator Resources',
      link: {
        type: 'doc',
        id: 'resources/index',
      },
      items: [
        'resources/facilitator-start-guide',
        {
          type: 'category',
          label: 'Templates and Worksheets',
          items: [
            'resources/case-notes-template',
            'resources/rule-inventory-worksheet',
            'resources/first-three-laws-worksheet',
            'resources/contract-design-worksheet',
            'resources/chores-api-household-agreement-template',
            'resources/loophole-audit-worksheet',
            'resources/precedent-ruling-log',
            'resources/micro-charter-template',
            'resources/amendment-template',
            'resources/listening-protocol-template',
            'resources/mock-trial-packet',
            'resources/written-ruling-template',
            'resources/appeal-checklist',
            'resources/final-reflection-template',
          ],
        },
        {
          type: 'category',
          label: 'Assessment and Examples',
          items: [
            'resources/assessment-rubrics',
            'resources/exemplar-student-artifacts',
          ],
        },
        'resources/real-world-extensions',
      ],
    },
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {type: 'link', label: hub.label, href: hub.href},
        ...curricula
          .filter((curriculum) => curriculum.href !== currentSiteHref)
          .map((curriculum) => ({
            type: 'link',
            label: curriculum.label,
            href: curriculum.href,
          })),
      ],
    },
    {
      type: 'category',
      label: 'Facilitator Resources',
      description: 'Guides, tools, and planning support for parents, teachers, and facilitators',
      collapsed: true,
      items: [
        'facilitator-guide',
        'curriculum-map',
        'scenario-cards',
        'exit-ticket-bank',
        'checks-for-understanding',
        'skills-alignment',
        'offline-use',
      ],
    },
    'license',
  ],
};

export default sidebars;
