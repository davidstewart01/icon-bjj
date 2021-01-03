import {Link} from 'react-router-dom'
import TieBelt from '../TieBelt'

const BlueBeltSyllabus = () => {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Technique</th>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tie the Belt</td>
            <td><Link to="/tie-belt">TieBelt</Link></td>
          </tr>
          <tr>
            <td>Front Roll</td>
            <td><Link to="/front-roll">FrontRoll</Link></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BlueBeltSyllabus;
