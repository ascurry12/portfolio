import { useEffect, useRef } from 'react';
import './GalleryModal.css';
import x from '../images/x.svg';

function GalleryModal({ children, openModal, closeModal }) {
    const ref = useRef();

    useEffect(() => {
        openModal ? ref.current.showModal() : ref.current.close();
    }, [openModal]);

    return (
        <div className='gallery-modal'>
            <dialog ref={ref} onClose={closeModal}>
                <button onClick={closeModal}><img src={x}></img></button>
                {children}
            </dialog>
        </div>
    )
}

export default GalleryModal;