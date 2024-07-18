import FullGallery from "./components/Gallery/FullGallery";
import GalleryHeader from "./components/GalleryHeader";
import { useState } from "react";

function Gallery() {
    const [filter, setFilter] = useState("All");
    return (
        <div>
            <GalleryHeader setFilter={setFilter} />
            <FullGallery filter={filter} />
        </div>
    );
}

export default Gallery;