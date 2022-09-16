import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';

function App() {
  const [entries, setEntries] = useState([{name: 'Jalen Arrington', post: 'Blah Blah'}]);
  
  function addNewPost(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
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
