import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';

function App() {
  
  const [entries, setPosts] = useState([{name: 'Jalen Arrington', post: 'Hello World'}])

  return (
    <div>
      
    </div>
  );
}

export default App;
