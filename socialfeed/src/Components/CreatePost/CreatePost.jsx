import React, { useState } from 'react';
import DisplayPosts from '../DisplayPosts/DisplayPosts';

const CreatePost = (props) => {
    const [post, setPosts] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)
      }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div className='form-group'>
            <label>Post</label>
                <input type='text' className='form-control' onChange={(event) => setPosts(event.target.value)} value={post}/>
                <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePost;