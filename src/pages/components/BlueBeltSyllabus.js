

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
          <tr>
            <td>Pull Closed Guard</td>
            <a href="/technique?name=Pull Closed Guard" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Pull Open Guard</td>
            <a href="/technique?name=Pull Open Guard" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Cross Choke in Closed Guard</td>
            <a href="/technique?name=Cross Choke in Closed Guard" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Kimura in Guard</td>
            <a href="/technique?name=Kimura in Guard" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Kimura in Guard Sweep</td>
            <a href="/technique?name=Kimura in Guard Sweep" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Scissor Sweep</td>
            <a href="/technique?name=Scissor Sweep" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Heel Sweep</td>
            <a href="/technique?name=Heel Sweep" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Closed Guard Standing Sweep</td>
            <a href="/technique?name=Closed Guard Standing Sweep" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
          <tr>
            <td>Balance Sweep</td>
            <a href="/technique?name=Balance Sweep" style={techniqueButton} class="btn btn-success" role="button">View Technique</a>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BlueBeltSyllabus;
