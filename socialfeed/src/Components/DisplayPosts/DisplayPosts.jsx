const DisplayPosts = (props) => {
    return ( 
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Post</tr>
        </thead>
        <tbody>
          {props.parentPosts.map((post) => {
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )};
 
export default DisplayPosts;