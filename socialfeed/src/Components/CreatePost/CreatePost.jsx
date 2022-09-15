import React, { useState } from 'react';

const CreatePost = (props) => {
    const [post, setPosts] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
      }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
            <label>Post</label>
            <input type='text' onChange={(event) => setPosts(event.target.value)} value={post}/>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;