const DisplayPosts = (props) => {
    return ( 
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Post</tr>
        </thead>
        <tbody>
          {props.parentEntries.map((posts) => {
            return (
              <tr>
                <td>{posts.name}</td>
                <td>{posts.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )};
 
export default DisplayPosts;