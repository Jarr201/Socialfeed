const DisplayPosts = (props) => {
    return ( 
      <table>
        <thead>
          
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