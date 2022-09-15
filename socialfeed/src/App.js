import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';

function App() {
  const [post, setPosts] = useState(['1']);
  const [name, setName] = useState(['2']);

  
  return (
    <div>
      <DisplayPosts parentPost={post} />
    </div>
  )};

export default App;
