import GalleryModal from "./GalleryModal";
import './GalleryItem.css';

function GalleryItem({ item }) {
    const { title, image, description, medium, wip } = item;
    return (
        <div className="item-container">
            <img src={image}></img>
            <span className="item_footer">
                <h4>{title}</h4>
                {/* <img src={wip ? star : innovation}></img> */}
            </span>
        </div>
    )
}


export default GalleryItem;