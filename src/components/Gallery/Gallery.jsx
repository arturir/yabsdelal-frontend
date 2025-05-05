import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import 'react-image-gallery/styles/css/image-gallery.css';
import images from '../../constants/images';
import { useEffect } from 'react';


Modal.setAppElement('#root');

export default function Gallery ({isOpen, setIsOpen}){ 
  useEffect(() => {
    if(isOpen) {
        document.body.classList.add("body_no-scroll");
    } else {
        document.body.classList.remove("body_no-scroll");
    }
  }, [isOpen]);
  
  return (
    <Modal isOpen={isOpen}  onRequestClose={() => setIsOpen(false)} style={{overlay: {zIndex: "100" }}} >
      <div className="close-button" style={{right:"10px", position: "absolute", zIndex: "999"}} onClick={()=>{setIsOpen(false)}}></div>
      <ImageGallery items={images}  showPlayButton={false} slideDuration={400} />
    </Modal>
  )
}