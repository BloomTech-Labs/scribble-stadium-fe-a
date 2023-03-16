import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import StoriesList from '../StoryManager/StoriesList';
import './storyManager.css';
import axios from 'axios';

const StoryManager = props => {
  const [addButtonState, setAddButtonState] = useState(false);
  const [storyData, setStoryData] = useState([]);
  // const { storyData } = props;

  useEffect(() => {
    // axios.get('http://localhost:8000/stories', {
    //   headers: {
    //     Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    //   },
    // })
    axios
      .get('http://localhost:8000/stories')
      .then(res => {
        console.log('res', res);
        setStoryData(res.data);
      })
      .catch(err => console.log('err', err));
  }, []);

  return (
    <div className="story-manager">
      <div className="library-left">
        <div className="library-left-header">
          <h1>Story Library</h1>
          <Upload>
            <Button
              className="upload-button"
              icon={<UploadOutlined />}
              onClick={() => setAddButtonState(true)}
              type="primary"
            >
              Upload
            </Button>
          </Upload>
        </div>
        <div className="library-left-body">
          <p>
            Wait a minute, Doc. What are you talking about? What happens to us
            in the future? What do we become assholes or something? Hey Biff,
            check out this guy's life preserver, dork thinks he's gonna drown.
            George. George. Doc, she's beautiful. She's crazy about me. Look at
            this, look what she wrote me, Doc. That says it all. Doc, you're my
            only hope. Doc, wait. No, bastards. Alright, okay listen, keep your
            pants on, she's over in the cafe. God, how do you do this? What made
            you change your mind, George? Oh, what I meant to day was- Yeah, I
            guessed you're a sailor, aren't you, that's why you wear that life
            preserver. The hell you doing to my car? His head's gone, it's like
            it's been erased.
          </p>
        </div>
      </div>
      <div className="library-right">
        <StoriesList storyData={storyData} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryManager);
