import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Card, Button, Modal, Form, Input } from 'antd';
const { TextArea } = Input;

const StoryCard = props => {
  const { storyData } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const displayModal = () => {
    console.log('displayModal');
    setModalOpen(true);
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  const submit = e => {
    e.preventDefault();
    console.log('changes made');
    axios.put(`localhost:8000/stories${id}`, {
      title: storyData.title,
      author: storyData.author,
      description: storyData.descriptionls,
    });
  };

  const editBtnStyle = {
    width: '4rem',
  };

  return (
    <div>
      <Card
        title={storyData.title}
        extra={
          <Button style={editBtnStyle} onClick={displayModal} type="default">
            Edit
          </Button>
        }
        style={{
          width: '25vw',
          border: '1px solid #d9d9d9',
        }}
      >
        <p>Author: {storyData.author}</p>
        <p>Description: {storyData.description}</p>
        <p>Date Posted: {storyData.created_at.substring(0, 10)}</p>
      </Card>
      <Modal style={{}} open={modalOpen} onOk={submit} onCancel={onCancel}>
        <h2>Edit Story</h2>
        <Form
          style={{
            marginTop: '30px',
          }}
        >
          <Form.Item label="Title" name="title">
            <Input type="text" name="title" defaultValue={storyData.title} />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input type="text" name="author" defaultValue={storyData.author} />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea
              type="text"
              name="description"
              rows={13}
              defaultValue={storyData.description}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StoryCard;
