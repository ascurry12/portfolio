import Button from "./Button/Button";
import './GalleryHeader.css';
import Sparkles from "./Sparkles";

function GalleryHeader() {
    return (
        <div>
            <h1><Sparkles>Gallery</Sparkles></h1>
            <div className='filter-nav'>
                <ul>
                    <li><Button content="All" /></li>
                    <li><Button content="Work In Progress" /></li>
                    <li><Button content="Complete" /></li>
                    <li><Button content="Digital" /></li>
                    <li><Button content="Physical" /></li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryHeader;