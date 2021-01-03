import {useLocation} from "react-router-dom";

import TieBelt from './blue-belt/TieBelt';
import FrontRoll from './blue-belt/FrontRoll';
import BackRoll from './blue-belt/BackRoll';
import SideBreakFall from './blue-belt/SideBreakFall';
import HipEscape from "./blue-belt/HipEscape";
import HipEscapeToTurtle from "./blue-belt/HipEscapeToTurtle";

const getContent = (name) => {
    switch (name) {
        case "Tie the Belt": 
            return <TieBelt />;
        case "Front Roll":
            return <FrontRoll />;
        case "Back Roll":
            return <BackRoll />;
        case "Side Break Fall":
            return <SideBreakFall />;
        case "Hip Escape":
            return <HipEscape />;
        case "Hip Escape to Turtle":
            return <HipEscapeToTurtle />;
    }
}

function Technique() {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');

    return (
      <>
        <header className="subhead text-center text-white">
            <div className="subhead-content">
                <div className="container">
                    <h3 className="subhead-heading mb-0">{name}</h3>
                    {/* <h3 className="masthead-subheading mb-0">Icon</h3> */}
                </div>
            </div>
        </header>

        {
            getContent(name)
        }
      </>
    )
}

export default Technique;
