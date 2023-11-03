import React, { useState } from 'react';
import { Modal } from 'antd';
import { Story } from '../StoryCard/StoryCard';

interface StoryReadFormProps extends Story {
  onClose: () => void;
}


export const StoryReadForm: React.FC<StoryReadFormProps> = (props) => {
  const { id, author, title, content, onClose } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    onClose()
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title={`${author}${'. '}${title}`}
      open={!!id}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={1000}
    >
      <pre style={{ textWrap: 'pretty' } as React.CSSProperties}>
        {content}
      </pre>
    </Modal>
  );
}
