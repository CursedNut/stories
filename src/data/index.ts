import { LordEdgwareDies } from "./LordEdgwareDies";
import { PaleHorse } from "./PaleHorse";

export interface Story {
  id: string;
  author?: string;
  title: string;
  description?: string;
  content: string;
  publishDate: string | Date;
  picture?: string;
}

export const enum StoryType {
  info = 'info',
  read = 'read',
  edit = 'edit',
  favorites = 'favorites',
  settings = 'settings',
}

export const stories: Story[] = [
  {
    id: '1',
    title: 'Middle Ages',
    content: `In the history of Europe, the Middle Ages or medieval period (also spelled mediæval or mediaeval) lasted approximately from the late 5th to the late 15th centuries, aligning with[citation needed] the post-classical period of global history. It began with the fall of the Western Roman Empire in 476 AD and ended with the fall of Constantinople in 1453 AD before transitioning into the Renaissance and then the Age of Discovery. The Middle Ages is the middle period of the three traditional divisions of Western history: antiquity, medieval, and modern. The medieval period is itself subdivided into the Early, High, and Late Middle Ages. Late medieval scholars at first called these the Dark Ages in contrast to classical antiquity; the accuracy of the term has subsequently been challenged.`,
    publishDate: new Date(),
    picture: 'https://medieval.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_rectangle/public/book1.jpg?itok=lGIZDd4j'
  },
  {
    id: '2',
    ...PaleHorse,
    publishDate: new Date(),
  },
  {
    id: '3',
    title: 'Castle',
    content: `A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. Scholars usually consider a castle to be the private fortified residence of a lord or noble. This is distinct from a mansion, palace and villa, whose main purpose was exclusively for pleasance and are not primarily fortresses but may be fortified.[a] Use of the term has varied over time and, sometimes, has also been applied to structures such as hill forts and 19th- and 20th-century homes built to resemble castles. Over the Middle Ages, when genuine castles were built, they took on a great many forms with many different features, although some, such as curtain walls, arrowslits, and portcullises, were commonplace.`,
    publishDate: new Date(),
    picture: 'https://www.medievalchronicles.com/wp-content/uploads/2014/10/Medieval-Castle11.jpg'
  },
  {
    id: '4',
    author: 'Me',
    title: 'Another one3',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    publishDate: new Date(),
    picture: 'https://miro.medium.com/v2/resize:fill:700:368/g:fp:0.46:0.48/1*0eG0UKcj-KC4U0eU2YFNeA.jpeg'
  },
  {
    id: '5',
    ...LordEdgwareDies,
    publishDate: new Date(),
    picture: 'https://cv1.litres.ru/pub/c/cover_max1500/37674415.jpg'
  },
  {
    id: '6',
    author: 'Me',
    title: 'Another one5',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    publishDate: new Date()
  },
  {
    id: '7',
    author: 'Me',
    title: 'Another one 7',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    publishDate: new Date()
  },
  {
    id: '8',
    author: 'Me',
    title: 'Another one 8',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    publishDate: new Date()
  },
];
