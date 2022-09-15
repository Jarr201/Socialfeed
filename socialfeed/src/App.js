import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';

function App() {
  const [post, setPosts] = useState('');
  const [name, setName] = useState('');

  

  return (
    <div>
      <DisplayPosts parentPosts={post} />
    </div>
  )};

export default App;
