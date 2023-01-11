import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Modal } from 'antd';

const initialFormValues = {
  title: '',
  author: '',
  description: '',
};

const StoryCard = props => {
  const { storyData } = props;
  const [formValues, setFormValues] = useState(initialFormValues);
  const [modalOpen, setModalOpen] = useState(false);

  const displayModal = () => {
    console.log('displayModal');
    setModalOpen(true);
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  const handleChanges = e => {
    setFormValues(e.target.value);
  };

  const editBtnStyle = {
    width: '4rem',
  };

  return (
    <div>
      <Card
        title={storyData.title}
        extra={
          <Button style={editBtnStyle} onClick={displayModal} type="text">
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
        <p>Date Posted: {storyData.date_posted}</p>
      </Card>
      <Modal open={modalOpen} onCancel={onCancel}>
        <form>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={handleChanges}
              value={storyData.title}
            />
          </label>
          <label>
            Author
            <input
              type="text"
              name="author"
              onChange={handleChanges}
              value={storyData.author}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              onChange={handleChanges}
              value={storyData.description}
            />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default StoryCard;
