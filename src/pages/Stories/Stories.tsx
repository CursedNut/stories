import React, { useMemo, useState } from "react";
import { Story, StoryType, stories } from "src/data";
import { StoryCard } from './components';
import { StoryForm } from "./components/StoryForm/StoryForm";
import { StoryInfoForm } from "./components/StoryInfoForm/StoryInfoForm";
import { StoryReadForm } from "./components/StoryReadForm/StoryReadForm";

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 25%)',
  gap: '4px',
  maxWidth: '1400px',
  width: '1400px',
  margin: 'auto',
} as const;

export const Stories = () => {
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [storyType, setStoryType] = useState<StoryType | undefined>();

  const storiesList = useMemo(() => stories.map((story) => (
    <StoryCard
      key={story.id}
      {...story}
      onInfo={() => {
        setCurrentStory(story);
        setStoryType(StoryType.info);
      }}
      onEdit={() => {
        setCurrentStory(story);
        setStoryType(StoryType.edit);
      }}
      onRead={() => {
        setCurrentStory(story);
        setStoryType(StoryType.read);
      }}
    />
  )), [stories]);

  const onClose = () => {
    setCurrentStory(null);
    setStoryType(undefined)
  }

  return (
    <>
      <div style={containerStyle}>
        {storiesList}
      </div>
      {currentStory && storyType === StoryType.edit ? <StoryForm {...currentStory} onClose={onClose} /> : null}
      {currentStory && storyType === StoryType.info ? <StoryInfoForm {...currentStory} onClose={onClose} /> : null}
      {currentStory && storyType === StoryType.read ? <StoryReadForm {...currentStory} onClose={onClose} /> : null}
    </>
  )
}
