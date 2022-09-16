import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
import './App.css';

function App() {
  const [entries, setEntries] = useState(['']);
  
  function addNewPost(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
          <DisplayPosts parentEntries={entries} />
          </div>
        <div className='col-md-6'>
          <div className='border-box'>
          <CreatePost addNewPostProperty={addNewPost} />
          </div>
      </div>
    </div>
  </div>
  </div>
  )};

export default App;
