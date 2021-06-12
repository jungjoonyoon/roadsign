import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jung Joon Yoon | Data Engineer', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Mr.',
  name: 'Jung Joon Yoon',
  subtitle: "I'm the Data Engineer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/jungjoonyoon', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'qraftemp.gif',
    alt: '',
    title: 'Qraft AI EMP Funds',
    info: '• Established almost 10 AI EMP funds using custom built AI pipeline, which is built mainly by myself.',
  },
  {
    id: nanoid(),
    img: 'mirae.gif',
    alt: '',
    title: 'Mirae Asset AI Funds',
    info: '• Launched 4 AI funds with Mirae Asset Global Investments. One of them is Mirae Asset AI Smart Beta Fund and it is ranked first among the all AI funds.',
  },
];

// Experience DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Qraft Technologies, Inc.',
    info0: '• As a market-leading financial AI startup, it has successfully shown its capability of applying the academic knowledge into business, such as Deep Learning technologies.',
    info1: '• Played various roles, such as Front Engineer, DBA, EAI specialist and Data Engineer.',
    info2: '• Used skills are including Spring Boot/Java, Oracle Database SQL/PL-SQL, IBM DataStage, R, Python, Mybatis, JQuery, OAuth2, Docker, Kubernetes, and AWS.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'LG CNS Co., Ltd.',
    info0: '• LG CNS is IT Service provider in Korea, which supports various business sectors like, government, manufacturing industry, financial industry, service industry, and communication industry. It has about 10000 employees.',
    info1: '• Facilitating Web Service technology, interconnected up to 100 private companies, which need to communicate with Korea Post.',
    info2: '• Responsible for the development, design and support of modules of Tibco Enterprise Application Integration (EAI) solution to interface 30 different sub systems.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Soongsil University',
    info0: '• Bachelor of Engineering (BE)',
    info1: '• Computer Science',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// Article DATA
export const articlesData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jungjoonyoon',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jungjoonyoon',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
