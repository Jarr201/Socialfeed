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
    <div>
      <DisplayPosts parentEntries={entries} />
      <CreatePost addNewPostProperty={addNewPost} />
    </div>
  )};

export default App;
