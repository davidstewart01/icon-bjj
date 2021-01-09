import {useLocation} from "react-router-dom";

import techniques from '../data/techniques.json';
import TechniqueDetail from './components/TechniqueDetail';

function Technique() {
    const search = useLocation().search;
    const belt = new URLSearchParams(search).get('belt');
    const name = new URLSearchParams(search).get('name');

    const technique = techniques[belt][name];

    return (
      <>
        <header className="subhead text-center text-white">
            <div className="subhead-content">
                <div className="container">
                    <h3 className="subhead-heading mb-0">{technique.name}</h3>
                    {/* <h3 className="masthead-subheading mb-0">Icon</h3> */}
                </div>
            </div>
        </header>
        
        <TechniqueDetail
            breakDown={technique['break-down']}
            iconDemo={technique['icon-demo']}
            youtubeVideos={technique['youtube-videos']}
            resources={technique['resources']} />
      </>
    )
}

export default Technique;
