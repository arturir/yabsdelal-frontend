import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import 'react-image-gallery/styles/css/image-gallery.css';
import img1 from "../../images/gallery/phone1.jpg";
import img2 from "../../images/gallery/phone2.jpg";
import img3 from "../../images/gallery/phone3.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,

  },
]

Modal.setAppElement('#root');

const Gallery = ({isOpen, setIsOpen}) => (
  <Modal isOpen={isOpen}  onRequestClose={() => setIsOpen(false)} >
      <div className="burgermenu__close" style={{right:"10px", position: "absolute", zIndex: "999"}} onClick={()=>{setIsOpen(false)}}></div>
      <ImageGallery items={images}  showPlayButton={false} slideDuration={400} />
   
  </Modal>
);

export default Gallery;