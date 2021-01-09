import techniques from '../../data/techniques.json';

const tableStyle = {
  marginTop: '20px'
};

const techniqueButton = {
  marginTop: '5px'
}

const SyllabusDetails = ({ belt }) => {
  const syllabusTechniques = techniques[belt];

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
         
         {
           Object.keys(syllabusTechniques).map(key => (
             <tr>
               <td>{syllabusTechniques[key]['name']}</td>
               <a href={`/technique?belt=blue&name=${key}`}
                  style={techniqueButton}
                  class="btn btn-success"
                  role="button">
                  View Technique
                </a>
             </tr>
           ))
         }
        </tbody>
      </table>
    </>
  );
}

export default SyllabusDetails;
