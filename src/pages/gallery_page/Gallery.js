import FullGallery from "./components/FullGallery";
import FilterNav from "./components/FilterNav";

function Gallery() {
    return (
        <div>
            <h1>Gallery Page</h1>
            <FilterNav />
            <FullGallery />
        </div>
    );
}

export default Gallery;