import React, { FC, useCallback, useMemo, useState } from "react";
import { Card, Dropdown, MenuProps, Tooltip } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ReadOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

//TODO: to api
export interface Story {
  id: string;
  author: string;
  title: string;
  descriprion?: string;
  content: string;
  publishDate: string | Date;
  picture?: string;
}

interface StoryCardProps extends Story {
  onInfo: () => void;
  onRead: () => void;
  onEdit: () => void;
  onDelete?: () => void;
}



export const StoryCard: FC<StoryCardProps> = (props) => {
  const { id, title, descriprion, content, author, picture, onEdit, onInfo, onRead } = props;
  const [open, setOpen] = useState(false);

  const items = [
    {
      label: 'Edit',
      key: '1',
      onClick: onEdit
    },
    {
      label: 'Русский',
      key: '2',
    },
    {
      label: 'Español',
      key: '3',
    },
  ];

  const handleMenuClick = useCallback(() => {
    setOpen(false);
  }, []);
  const handleOpenChange = useCallback((flag: boolean) => {
    setOpen(flag);
  }, []);

  const coverImage = useMemo(() => {
    if (picture) {
      return (
        <div style={{ height: '200px', overflow: 'hidden', background: '#333', border: '1px solid #f0f0f0' }}>
          <img style={{ width: '100%', objectFit: 'cover', height: '200px' }} alt={title} src={picture} />
        </div>
      )
    }

    return (
      <div style={{ height: '200px', overflow: 'hidden', background: '#fff', border: '1px solid #f0f0f0' }}>
        <img style={{
          display: 'block', width: 'auto', height: '100%', margin: 'auto'
        }} alt={title} src='https://ggonline.kz/local/templates/main_template/images/crash_photo.jpeg' />
      </div>
    )
  }, [picture]);

  return (
    <Card
      cover={coverImage}
      actions={[
        <Tooltip title="Об истории">
          <InfoCircleOutlined key="info" onClick={onInfo} />
        </Tooltip>,
        <Tooltip title="Читать">
          <ReadOutlined key="read" onClick={onRead} />
        </Tooltip>,
        <Tooltip title="Заметки">
          <EditOutlined key="edit" onClick={onEdit} />
        </Tooltip>,
        <SettingOutlined key="setting" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
      hoverable
    // title={title}
    // extra={<EditOutlined key="edit" onClick={onEdit} />}
    // onClick={onEdit}
    >
      <Meta
        // avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${id}`} />}
        title={
          <Tooltip title={`${author}${'. '}${title}`} placement="bottom">
            {author}{'. '}{title}
          </Tooltip>
        }
        description={<div style={{ height: '90px', overflow: 'hidden' }}>{descriprion || content}</div>}
      />
    </Card>
  )
}
