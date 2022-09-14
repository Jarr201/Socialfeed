import React, { useState } from 'react';

function App() {
  
  const [posts, setPosts] = useState([{name: 'Jalen Arrington', post: 'Hello World'}])

  return (
    <div>
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Post</tr>
        </thead>
        <tbody>
          <td>Jalen Arrington</td>
          <td>Hello World</td>
        </tbody>
      </table>
    </div>
  );
}

export default App;
