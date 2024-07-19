import GalleryModal from "./GalleryModal";
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
                </span>
            </div>

            <GalleryModal
                openModal={modal}
                closeModal={() => setModal(false)}
            >
                <img className='art' src={image}></img>
                <h4>{title}</h4>
                <p>{description}</p>
            </GalleryModal>
        </div>
    )
}


export default GalleryItem;