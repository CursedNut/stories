import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { Story } from '../StoryCard/StoryCard';
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";

const { TextArea } = Input;

interface StoryFormProps extends Story {
  onClose: () => void;
}

type FieldType = {
  title: string;
  content: string;
};

export const StoryForm: React.FC<StoryFormProps> = (props) => {
  const { id, title, content, onClose } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {
    control,
    getValues,
    formState
  } = useForm({
    defaultValues: {
      title,
      content
    }
  });

  console.log(formState)

  const handleOk = () => {
    // setConfirmLoading(true);
    // setTimeout(() => {
    //   setConfirmLoading(false);
    //   onClose()
    // }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    onClose();
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    console.log(formState)
  };

  return (
    <Modal
      title={title}
      open={!!id}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okButtonProps={{
        htmlType: 'submit',
        form: 'basic'
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        initialValues={getValues()}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Controller
          control={control}
          name="title"
          rules={{ required: true, max: 20 }}
          render={({ field }) =>
            <Form.Item<FieldType>
              label="Title"
              name={field.name}
              rules={[{ required: true, message: 'Required field' }, { max: 20, message: 'be longer than 20 characters' }]}
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
              rules={[{ required: true, message: 'Required field' }]}
            >
              <TextArea {...field} placeholder='content' rows={6} />
            </Form.Item>
          }
        />
      </Form>
    </Modal>
  );
}
