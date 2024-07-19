import Button from "./Button/Button";
import './GalleryHeader.css';
import Sparkles from "./Sparkles";
import { useState } from "react";

function GalleryHeader({ setFilter }) {
    const [activeButton, setActiveButton] = useState(0);

    function onClick(filter, number) {
        setFilter(filter);
        setActiveButton(number);
        console.log(filter);

    };

    return (
        <div>
            <h1><Sparkles>Gallery</Sparkles></h1>
            <div className='filter-nav'>
                <ul>
                    <li><Button onClick={() => onClick("All", 0)} content="All" active={activeButton === 0 ? true : false} /></li>
                    <li><Button onClick={() => onClick("wip", 1)} content="Work In Progress" active={activeButton === 1 ? true : false} /></li>
                    <li><Button onClick={() => onClick("done", 2)} content="Complete" active={activeButton === 2 ? true : false} /></li>
                    <li><Button onClick={() => onClick("Digital", 3)} content="Digital" active={activeButton === 3 ? true : false} /></li>
                    <li><Button onClick={() => onClick("Physical", 4)} content="Physical" active={activeButton === 4 ? true : false} /></li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryHeader;