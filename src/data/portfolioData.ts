// Portfolio data extracted from the provided document
export type Category = 'automotive' | 'video' | 'onboarding' | 'it';

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: Category;
  thumbnail: string;
}

export const categories: { id: Category; label: string; color: string }[] = [
  { id: 'automotive', label: 'Automotive', color: 'category-automotive' },
  { id: 'video', label: 'eLearning Videos', color: 'category-video' },
  { id: 'onboarding', label: 'Onboarding Modules', color: 'category-onboarding' },
  { id: 'it', label: 'IT & Technology', color: 'category-it' },
];

export const portfolioItems: PortfolioItem[] = [
  // Automotive
  {
    id: 'ev',
    title: 'Electric Vehicles (EVs)',
    description: 'Comprehensive training module covering electric vehicle technology, components, and operation.',
    url: 'https://storage.googleapis.com/elfn/11.Electric-vehicles/content/index.html',
    category: 'automotive',
    thumbnail: 'electric-vehicles',
  },
  {
    id: 'takata',
    title: 'Takata AirBag Recall',
    description: 'Mandatory training for all staff on the Takata airbag recall safety procedures.',
    url: 'https://cloud.scorm.com/sc/InvitationLaunch?userInvitationId=c04bd132-8c2b-4abe-9592-79410b5419e2',
    category: 'automotive',
    thumbnail: 'airbag-safety',
  },
  {
    id: 'xtrail',
    title: 'MY17 X-Trail',
    description: 'Key features of the MY17 X-Trail vehicle - Design, Mechanical, Interior and Safety features. Includes an assessment to test knowledge retention.',
    url: 'https://cloud.scorm.com/sc/InvitationLaunch?userInvitationId=58392d1f-57d9-4162-afb8-b49f1c36fb7f',
    category: 'automotive',
    thumbnail: 'xtrail',
  },
  // eLearning Videos
  {
    id: 'nissan-tech',
    title: 'Nissan Technologies Introduction',
    description: 'Introduction video showcasing Nissan\'s cutting-edge automotive technologies.',
    url: 'https://youtu.be/CgZQzzdIliI',
    category: 'video',
    thumbnail: 'video-production',
  },
  {
    id: 'gtr-wash',
    title: 'How to Wash a GTR with Matte Paint Finish',
    description: 'Instructional video on proper care and washing techniques for vehicles with matte paint finishes.',
    url: 'https://youtu.be/4PKF3sTTXwE',
    category: 'video',
    thumbnail: 'video-production',
  },
  {
    id: 'park-assist',
    title: 'Intelligent Park Assist',
    description: 'Demonstration video explaining the intelligent park assist system features and operation.',
    url: 'https://youtu.be/h1pYh5Vg3C4',
    category: 'video',
    thumbnail: 'video-production',
  },
  // Onboarding Modules
  {
    id: 'privacy',
    title: 'Privacy',
    description: 'Essential information for all employees and contractors on complying with Victorian privacy legislation.',
    url: 'https://rise.articulate.com/share/7OABVImC7Q1p57iAmk4QAqzW0jKhNxrE#/',
    category: 'onboarding',
    thumbnail: 'privacy',
  },
  {
    id: 'copyright-elements',
    title: 'Elements of Copyright Law',
    description: 'Training covering key elements of copyright, including Copyright Law & the media/journalist, Moral Rights of Creators, and how to get copyright permission.',
    url: 'https://thisisvincent.github.io/2.Elements_of_Copyright_Law/story_html5.html?lms=1',
    category: 'onboarding',
    thumbnail: 'copyright',
  },
  {
    id: 'copyright-history',
    title: 'History And Duration of Copyright',
    description: 'Training covering the History and Duration of Copyright as it applies to ordinary citizens, the business world and the media. Includes examples of copyright infringements.',
    url: 'https://storage.googleapis.com/elfn/2.%20elfn2-history-and-duration-of-copyright-law-_final/index.html',
    category: 'onboarding',
    thumbnail: 'copyright',
  },
  {
    id: 'aml',
    title: 'Anti-Money Laundering (AML)',
    description: 'Your Role in Preventing Financial Crime - comprehensive AML training module.',
    url: 'https://storage.googleapis.com/elfn/aml/content/index.html',
    category: 'onboarding',
    thumbnail: 'aml',
  },
  // IT & Technology
  {
    id: 'comptia',
    title: 'CompTIA Certification Prep',
    description: 'Preparation training for Certified Technical Trainer certification.',
    url: 'https://thisisvincent.github.io/10.COMPTIA_Generic/',
    category: 'it',
    thumbnail: 'comptia',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence (AI)',
    description: 'Introduction to AI concepts, applications, and implications for modern business.',
    url: 'https://storage.googleapis.com/elfn/9.AI/content/index.html',
    category: 'it',
    thumbnail: 'ai',
  },
  {
    id: 'crypto',
    title: 'Crypto & Blockchain',
    description: 'Understanding cryptocurrency and blockchain technology fundamentals.',
    url: 'https://storage.googleapis.com/elfn/10.Crypto-blockchain/content/index.html',
    category: 'it',
    thumbnail: 'crypto',
  },
  {
    id: 'infosec',
    title: 'Information Security Awareness',
    description: 'Cyber Security Awareness training for protecting organizational data and systems.',
    url: 'https://storage.googleapis.com/elfn/8.InfoSec/content/index.html',
    category: 'it',
    thumbnail: 'cybersecurity',
  },
  {
    id: 'transform-tech',
    title: 'Transformational Technologies Since 2000',
    description: 'Exploring the major technological advancements that have shaped the 21st century.',
    url: 'https://storage.googleapis.com/elfn/7.transform-tech/content/index.html',
    category: 'it',
    thumbnail: 'transform-tech',
  },
];
