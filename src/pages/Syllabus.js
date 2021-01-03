import {Link} from 'react-router-dom'
import BlueBeltSyllabus from './components/BlueBeltSyllabus'

const listStyle = {
    marginTop: '20px'
};

function Syllabus() {
    return (
      <>
        <header className="subhead text-center text-white">
            <div className="subhead-content">
                <div className="container">
                    <h3 className="subhead-heading mb-0">Syllabus</h3>
                    {/* <h3 className="masthead-subheading mb-0">Icon</h3> */}
                    
                </div>
            </div>
        </header>

        <ul style={listStyle} class="nav nav-pills nav-justified" role="tablist">
            <li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#blue">Blue</a></li>
            <li class="nav-item"><a style={{backgroundColor: 'purple', color: 'white'}} class="nav-link" data-toggle="pill" href="#purple">Purple</a></li>
            <li class="nav-item"><a style={{backgroundColor: 'brown', color: 'white'}} class="nav-link" data-toggle="pill" href="#brown">Brown</a></li>
            <li class="nav-item"><a style={{backgroundColor: 'black', color: 'white'}} class="nav-link" data-toggle="pill" href="#black">Black</a></li>
        </ul>

        <div class="tab-content">
            <div id="blue" class="tab-pane container active"><BlueBeltSyllabus /></div>
            <div id="purple" class="tab-pane container fade">Purple</div>
            <div id="brown" class="tab-pane container fade">Brown</div>
            <div id="black" class="tab-pane container fade">Black</div>
        </div>
      </>
    )
}

export default Syllabus;
