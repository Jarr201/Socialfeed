const DisplayPosts = (props) => {
    return ( 
        <table>
        <thead>
          <tr>Name</tr>
          <tr>Post</tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;