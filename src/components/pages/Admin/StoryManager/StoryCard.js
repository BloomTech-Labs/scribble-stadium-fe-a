import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Modal, Form, Input } from 'antd';
const { TextArea } = Input;

const initialFormValues = {
  title: 'enter title here',
  author: 'enter author',
  description: 'enter description',
};

const StoryCard = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const displayModal = () => {
    console.log('displayModal');
    setModalOpen(true);
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  // const handleChanges = e => {
  //   setFormValues(e.target.value);
  // };

  const submit = e => {
    e.preventDefault();
    console.log('changes made');
    // setprops({
    //   ...props,
    //   props[title]:

    // });
    // console.log([...props]);
  };

  const editBtnStyle = {
    width: '4rem',
  };

  return (
    <div>
      <Card
        title={props.title}
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
        <p>Author: {props.author}</p>
        <p>Description: {props.description}</p>
        <p>Date Posted: {props.date_posted}</p>
      </Card>
      <Modal style={{}} open={modalOpen} onOk={submit} onCancel={onCancel}>
        <h2>Edit Story</h2>
        <Form
          style={{
            marginTop: '30px',
          }}
        >
          <Form.Item label="Title" name="title">
            <Input
              type="text"
              name="title"
              // onChange={event => handleChanges(event)}
              defaultValue={props.title}
            />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input
              type="text"
              name="author"
              // onChange={event => handleChanges(event)}
              defaultValue={props.author}
            />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea
              type="text"
              name="description"
              rows={13}
              // onChange={event => handleChanges(event)}
              defaultValue={props.description}
            />
          </Form.Item>
        </Form>
        {/* <Button onClick={() => submit}>Submit</Button> */}
      </Modal>
    </div>
  );
};

export default StoryCard;
