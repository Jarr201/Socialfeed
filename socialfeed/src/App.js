import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';

function App() {
  
  const [entries, setPosts] = useState([{name: 'Jalen Arrington', post: 'Hello World'}])

  return (
    <div>
      <DisplayPosts parentPosts={entries} />
    </div>
  );
}

export default App;
