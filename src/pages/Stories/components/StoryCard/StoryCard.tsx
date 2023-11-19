import React, { FC, SyntheticEvent, useCallback, useMemo } from "react";
import { Card, FloatButton, Tooltip } from 'antd';
import { SettingOutlined, ReadOutlined, InfoCircleOutlined, HeartOutlined, EditOutlined } from '@ant-design/icons';
import { StoryCoverImage } from "../StoryCoverImage/StoryCoverImage";
import { Story, StoryType } from "src/data";

const { Meta } = Card;

interface StoryCardProps extends Story {
  onInfo: () => void;
  onRead: () => void;
  onEdit: () => void;
  onDelete?: () => void;
}

export const StoryCard: FC<StoryCardProps> = (props) => {
  const { title, description, content, author, picture, onEdit, onInfo, onRead } = props;

  const handleReadClick = useCallback(<T,>(e: SyntheticEvent<T>) => {
    e.stopPropagation();
    onRead();
  }, [onRead]);

  const handleFavoritesClick = useCallback(<T,>(e: SyntheticEvent<T>) => {
    e.stopPropagation();
  }, []);

  const handleSettingsClick = useCallback(<T,>(e: SyntheticEvent<T>) => {
    e.stopPropagation();
    onEdit();
  }, []);

  const coverImage = useMemo(() => <StoryCoverImage title={title} picture={picture} />, [title, picture]);

  const actions = useMemo(() => [
    <Tooltip title="Об истории">
      <InfoCircleOutlined key={StoryType.info} />
    </Tooltip>,
    <Tooltip title="Читать">
      <ReadOutlined key={StoryType.read} onClick={handleReadClick} />
    </Tooltip>,
    <Tooltip title="В избранное">
      <HeartOutlined key={StoryType.favorites} onClick={handleFavoritesClick} />
    </Tooltip>,
    <Tooltip title="Настройки">
      <SettingOutlined key={StoryType.settings} onClick={handleSettingsClick} />
    </Tooltip>
  ], [handleReadClick, handleFavoritesClick, handleSettingsClick]);

  const cardTitle = useMemo(() => {
    const cardTitleText = author ? `${author}${'. '}${title}` : title;

    return (
      <Tooltip title={cardTitleText} placement="bottom">
        {cardTitleText}
      </Tooltip>
    );
  }, [title, author]);

  const cardDescription = useMemo(() => (
    <div style={{ height: '66px', overflow: 'hidden' }}>{description || content}</div>
  ), [description, content]);

  return (
    <Card
      cover={coverImage}
      actions={actions}
      hoverable
      onClick={onInfo}
    >
      <Meta title={cardTitle} description={cardDescription} />
    </Card>
  );
}
