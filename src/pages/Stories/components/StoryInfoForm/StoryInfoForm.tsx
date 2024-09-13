import React, { useMemo, useState } from 'react';
import { Modal } from 'antd';
import { Story } from 'src/data';

interface StoryInfoFormProps extends Story {
  onClose: () => void;
}


export const StoryInfoForm: React.FC<StoryInfoFormProps> = (props) => {
  const { id, title, author, description, content, picture, onClose } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    onClose()
  };

  const handleCancel = () => {
    onClose();
  };

  const coverImage = useMemo(() => (
    <div style={{ background: picture ? '#333' : '#fff', marginBottom: '24px' }}>
      <img style={{
        display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: picture ? '400px' : '200px'
      }} alt={title} src={picture || 'https://ggonline.kz/local/templates/main_template/images/crash_photo.jpeg'} />
    </div>
  ), [picture]);

  return (
    <Modal
      title={`${author}${'. '}${title}`}
      open={!!id}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      {coverImage}
      {description || content.slice(0, 250)}
    </Modal>
  );
}
