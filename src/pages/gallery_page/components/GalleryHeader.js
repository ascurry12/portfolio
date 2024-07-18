import Button from "./Button/Button";
import './GalleryHeader.css';
import Sparkles from "./Sparkles";

function GalleryHeader({ setFilter }) {

    function onClick(filter) {
        setFilter(filter);
        console.log(filter);
    };

    return (
        <div>
            <h1><Sparkles>Gallery</Sparkles></h1>
            <div className='filter-nav'>
                <ul>
                    <li><Button onClick={() => onClick("All")} content="All" /></li>
                    <li><Button onClick={() => onClick("wip")} content="Work In Progress" /></li>
                    <li><Button onClick={() => onClick("done")} content="Complete" /></li>
                    <li><Button onClick={() => onClick("Digital")} content="Digital" /></li>
                    <li><Button onClick={() => onClick("Physical")} content="Physical" /></li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryHeader;