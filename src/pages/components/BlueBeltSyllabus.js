

const tableStyle = {
  marginTop: '20px'
};

const techniqueButton = {
  marginTop: '5px'
}

const BlueBeltSyllabus = () => {
  return (
    <>
      <table style={tableStyle} class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Technique</th>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tie the Belt</td>
            <a href="/technique?name=Tie the Belt" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Front Roll</td>
            <a href="/technique?name=Front Roll" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Back Roll</td>
            <a href="/technique?name=Back Roll" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Side Break Fall</td>
            <a href="/technique?name=Side Break Fall" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Hip Escape</td>
            <a href="/technique?name=Hip Escape" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Hip Escape to Turtle</td>
            <a href="/technique?name=Hip Escape to Turtle" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BlueBeltSyllabus;
