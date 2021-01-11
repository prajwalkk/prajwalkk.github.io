import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prajwal | Developer', // e.g: 'Name | Developer'
  lang: 'en, jp', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Prajwal Kammardi',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a technophile and a passionate programmer who loves to program new stuff and solve the complex problems (clichéd, yet true). When I am not coding, I like to watch Anime or go Swimming. I love going on treks and I hold a 1st Dan-Black belt in Taekwondo (Still need to get my fitness levels back).',
  paragraphTwo:
    "I am currently pursuing my Master's degree in Computer Science at the University of Illinois at Chicago. My areas of study and interest would include Clound Computing, Micro-Services, Mobile/Web development, Machine Learning, to name a few. Please refer to GitHub button at the bottom of the page to check out my projects.",
  paragraphThree:
    'Formerly, I worked as a Software Engineer at Mindtree Ltd., for a client who is the Global leader in Hospiality industry as a performance and an automation engineer. I worked on tools to Test the functional and non-functional requirements in Big-Data Projects (ETL and Microservices).',
  resume: 'https://drive.google.com/file/d/1gnG7oeN9H-Ji_fhnDsahlX7H-_pACn7D/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project0.png',
    title: 'Bloom-Filter based Clock for Distributed Systems',
    info: 'Developed a distributed message passing application to simulate and analyse the causality of processes in Bloom Filter based clocks with respect to the standard Vector Clocks. Implemented reactive programming paradigm using typed Akka actor model instead of primitive concurrency based protocols.',
    info2: 'Simulation using Scala, Akka. The analysis is carried out using python (pandas, matplotlib, numpy)',
    url: '',
    repo: 'https://github.com/prajwalkk/bloom-clock-akka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'CAN and Chord Simulation',
    info:
      'Developed resilient overlay networks by designing and implementing a simulator of a cloud computing facility, specifically a reliable overlay network using the Chord and Content Addressable Network (CAN) algorithms for distribution of work in a cloud data-center',
    info2:
      'Implemented using Akka Cluster Sharding to distribute the application actors with multiple independent nodes.',
    url: 'https://hub.docker.com/repository/docker/prajwalkk/overlay-sim',
    repo: 'https://github.com/prajwalkk/akka-clustersharding-can-chord-sims', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'DBLP Statistics',
    info: 'Distributed program for parallel processing of the publically available DBLP dataset that contains entries for various publications at many different venues (e.g., conferences and journals). Raw XML-based DBLP dataset is also publically available along with its schema and the documentation.',
    info2: 'Deployed in Amazon EMR',
    url: 'https://youtu.be/ou1ybwYI7Ec',
    repo: 'https://github.com/prajwalkk/DBLP-statistics-MapReduceimplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Datacenter Simulation - CloudSim',
    info: 'Experiment with creading cloud computing datacenters and running jobs on them using CloudSim Plus.',
    info2: '',
    url: '',
    repo: 'https://github.com/prajwalkk/cloud-simulations', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'UIC Search Engine',
    info: 'This is an end-to-end Search Engine created by Crawling the pages of the UIC domain. Consists of web-crawler, data-preprocessor and search logic',
    info2: 'Written in python, NLP techniques like Page-Rank, cosine-similarity, Query Expansion, Relevance Feedback. ',
    url: '',
    repo: 'https://github.com/prajwalkk/Search-Engine-FS', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please get in touch via e-mail using the button below',
  btn: 'Contact Me',
  email: 'prajwalkkammardi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/prajwalkk',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/11051012/prajwal-k-kammardi',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/prajwalkk95',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prajwalkkammardi',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/beingakatsuki101',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
