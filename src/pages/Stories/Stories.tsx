import React, { useMemo, useState } from "react";
import { StoryCard } from './components';
import { Story } from "./components/StoryCard/StoryCard";
import { StoryForm } from "./components/StoryForm/StoryForm";
import { PaleHorse } from "src/data/PaleHorse";
import { StoryInfoForm } from "./components/StoryInfoForm/StoryInfoForm";
import { StoryReadForm } from "./components/StoryReadForm/StoryReadForm";
import { LordEdgwareDies } from "src/data/LordEdgwareDies";

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 20%)',
  gap: '4px',
  maxWidth: '1400px',
  width: '1400px',
  margin: 'auto',
} as const;

export const Stories = () => {
  const stories: Story[] = [
    {
      id: '1',
      author: 'Me',
      title: 'И жили они долго и счастливо',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
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
      author: 'Me',
      title: 'Another one2',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
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
    {
      id: '9',
      author: 'Me',
      title: 'Another one 9',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      publishDate: new Date()
    },
    {
      id: '10',
      author: 'Me',
      title: 'Another one 10',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      publishDate: new Date()
    },
    {
      id: '11',
      author: 'Me',
      title: 'Another one 10',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      publishDate: new Date()
    },
    {
      id: '12',
      author: 'Me',
      title: 'Another one 10',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      publishDate: new Date()
    },
    {
      id: '13',
      author: 'Me',
      title: 'Another one 10',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      publishDate: new Date()
    },
  ];

  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [storyType, setStoryType] = useState<string | undefined>();

  const storiesList = useMemo(
    () => stories.map((story) => <StoryCard
      key={story.id}
      {...story}
      onInfo={() => {
        setCurrentStory(story);
        setStoryType('info');
      }}
      onEdit={() => {
        setCurrentStory(story);
        setStoryType('edit');
      }}
      onRead={() => {
        setCurrentStory(story);
        setStoryType('read');
      }}
    />),
    [stories]
  );

  const onClose = () => {
    setCurrentStory(null);
    setStoryType(undefined)
  }

  return (
    <>
      <div style={containerStyle}>
        {storiesList}
      </div>
      {currentStory && storyType === 'edit' ? <StoryForm {...currentStory} onClose={onClose} /> : null}
      {currentStory && storyType === 'info' ? <StoryInfoForm {...currentStory} onClose={onClose} /> : null}
      {currentStory && storyType === 'read' ? <StoryReadForm {...currentStory} onClose={onClose} /> : null}
    </>
  )
}
