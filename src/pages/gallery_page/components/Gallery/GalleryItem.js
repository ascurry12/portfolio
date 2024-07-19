import GalleryModal from "./GalleryModal";
import Tag from "../Tag/Tag";
import './GalleryItem.css';
import { useState } from "react";

function GalleryItem({ item }) {
    const { title, image, description, medium, wip } = item;
    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className="item-container" onClick={() => setModal(true)}>
                <img src={image}></img>
                <span className="item-footer">
                    <p>{title}</p>
                    {medium ? <Tag content={medium} type={medium} /> : null}
                    {wip ? <Tag content="Work in progress" type="wip" /> : <Tag content="Complete" type="done" />}
                </span>
            </div>

            <GalleryModal
                openModal={modal}
                closeModal={() => setModal(false)}
            >
                <h3>{title}</h3>
                <img className='art' src={image}></img>
                <p>{description}</p>
                {medium ? <Tag content={medium} type={medium} /> : null}
                {wip ? <Tag content="Work in progress" type="wip" /> : <Tag content="Complete" type="done" />}
            </GalleryModal>
        </div>
    )
}


export default GalleryItem;