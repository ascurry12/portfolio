import GalleryItem from "./GalleryItem";
import './FullGallery.css';
import testimage from '../images/testimage.png';
import testimage2 from '../images/testimage2.png';
import testimage3 from '../images/testimage3.png';
import testimage4 from '../images/testimage4.png';
import testimage5 from '../images/testimage5.png';
import testimage6 from '../images/testimage6.png';
import testimage7 from '../images/testimage7.png';

const galleryItems = [
    {
        title: 'Jake, BMO, and Finn',
        image: testimage,
        description: 'Jake, BMO, and Finn from \'Adventure Time\'',
        medium: 'Digital',
        wip: true
    },
    {
        title: 'Just Jake',
        image: testimage2,
        description: 'Jake from \'Adventure Time\'',
        medium: 'Physical',
        wip: false
    },
    {
        title: 'Cuphead and Mugman',
        image: testimage3,
        description: 'The iconic \'Cuphead\' brothers',
        medium: 'Physical',
        wip: true
    },
    {
        title: 'The Powerpuff Girls',
        image: testimage4,
        description: 'Sugar, spice, and everything nice',
        medium: 'Digital',
        wip: true
    },
    {
        title: 'Walk',
        image: testimage5,
        description: 'Walk by NCT 127',
        medium: 'Physical',
        wip: false
    },
    {
        title: 'Bob Ross',
        image: testimage6,
        description: 'Fun fact: I have a talking Bob Ross bobble head',
        medium: 'Digital',
        wip: false
    },
    {
        title: 'President Barbie',
        image: testimage7,
        description: 'She\'s the president!',
        medium: 'Digital',
        wip: true
    }

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