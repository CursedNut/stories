import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Controller } from "react-hook-form";
import type { Story } from 'src/data';

const { TextArea } = Input;

interface StoryFormProps extends Story {
  onClose: () => void;
}

type FieldType = {
  title: string;
  description?: string;
  content: string;
};

export const StoryForm: React.FC<StoryFormProps> = (props) => {
  const { id, title, description, content, onClose } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {
    control,
    formState,
    handleSubmit
  } = useForm({
    defaultValues: {
      title,
      description,
      content,
    }
  });

  console.log(formState)

  const handleOk = () => {
    // setConfirmLoading(true);
    // setTimeout(() => {
    //   setConfirmLoading(false);
    //   onClose()
    // }, 2000);

    console.log('Clicked ok button');
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    onClose();
  };

  const onSubmit: SubmitHandler<FieldType> = (data) => {
    console.log(data)
  };

  return (
    <Modal
      title="Настройки"
      open={!!id}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okButtonProps={{
        htmlType: 'submit',
        form: 'settings'
      }}
      width={600}
    >
      <form id="settings" name="settings" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          control={control}
          name="title"
          rules={{ required: true, max: 20 }}
          render={({ field }) =>
            <Form.Item<FieldType>
              label="Title"
              name={field.name}
              rules={[{ required: true, message: 'Required field' }, { max: 20, message: 'be longer than 20 characters' }]}
              valuePropName={field.name}
            >
              <Input {...field} placeholder='title' />
            </Form.Item>
          }
        />
        <Controller
          control={control}
          name="content"
          rules={{ required: true }}
          render={({ field }) =>
            <Form.Item<FieldType>
              label="Content"
              name={field.name}
              valuePropName={field.name}
              rules={[{ required: true, message: 'Required field' }]}
            >
              <TextArea {...field} placeholder='content' rows={6} />
            </Form.Item>
          }
        />

        <Controller
          control={control}
          name="description"
          rules={{ required: true }}
          render={({ field }) =>
            <Form.Item<FieldType>
              label="Content"
              name={field.name}
              valuePropName={field.name}
              rules={[{ required: true, message: 'Required field' }]}
            >
              <TextArea {...field} placeholder='content' rows={6} />
            </Form.Item>
          }
        />
      </form>
    </Modal>
  );
}
