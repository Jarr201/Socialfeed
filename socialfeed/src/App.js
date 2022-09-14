import React, { useState } from 'react';

function App() {
  
  const [posts, setPosts] = useState([{name: 'Jalen Arrington', post: 'Hello World'}])

  return (
    <div>
      <div>Hello World</div>
    </div>
  );
}

export default App;
