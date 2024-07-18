import GalleryItem from "./GalleryItem";
import './FullGallery.css';
import testimage from '../images/testimage.png';
import testimage2 from '../images/testimage2.png';


function FullGallery() {
    const galleryItems = [
        {
            title: 'Test item 1',
            image: testimage,
            description: 'Test description 1',
            medium: 'digital',
            wip: true
        },
        {
            title: 'Test item 2',
            image: testimage2,
            description: 'Test description 2',
            medium: 'acrylic',
            wip: false
        },
    ]
    return (
        <div className='full-gallery'>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[1]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>

            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[1]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[1]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[1]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[0]} />
            </div>
            <div className='gallery-item'>
                <GalleryItem item={galleryItems[1]} />
            </div>

        </div>

    )
}

export default FullGallery;