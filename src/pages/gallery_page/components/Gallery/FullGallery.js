import GalleryItem from "./GalleryItem";
import './FullGallery.css';
import testimage from '../images/testimage.png';
import testimage2 from '../images/testimage2.png';
import testimage3 from '../images/testimage3.png';
import testimage4 from '../images/testimage4.png';

const galleryItems = [
    {
        title: 'Test item 1',
        image: testimage,
        description: 'Test description 1',
        medium: 'Digital',
        wip: true
    },
    {
        title: 'Test item 2',
        image: testimage2,
        description: 'Test description 2',
        medium: 'Physical',
        wip: false
    },
    {
        title: 'Test item 3',
        image: testimage3,
        description: 'Test description 3',
        medium: 'Physical',
        wip: true
    },
    {
        title: 'Test item 4',
        image: testimage4,
        description: 'Test description 4',
        medium: 'Digital',
        wip: true
    },

]

function FullGallery({ filter }) {

    return (
        <div className='full-gallery'>
            {
                galleryItems.map((card, index) => {
                    if (filter === "All" || card.medium === filter || (filter === "wip" && card.wip)
                        || (filter === "done" && !card.wip)) {
                        return (
                            <div key={index} className='gallery-item'>
                                <GalleryItem item={card} />
                            </div>
                        )
                    }
                }
                )
            }
        </div>

    )
}

export default FullGallery;