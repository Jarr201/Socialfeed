import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';

function App() {
  const [entries, setEntries] = useState([{name: 'Jalen Arrington', post: 'Blah Blah'}]);
  
  return (
    <div>
      <DisplayPosts parentEntries={entries} />
      <CreatePost parentEntries={entries} />
    </div>
  )};

export default App;
