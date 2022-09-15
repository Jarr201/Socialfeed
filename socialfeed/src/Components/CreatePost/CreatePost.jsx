import React, { useState } from 'react';
import DisplayPosts from '../DisplayPosts/DisplayPosts';

const CreatePost = (props) => {
    const [post, setPosts] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(formEvent) {
        formEvent.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)
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