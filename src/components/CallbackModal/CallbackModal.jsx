import Modal from 'react-modal';
import ContactForm from "../ContactForm/ContactForm";

Modal.setAppElement('#root');

export default function CallbackModal ({isOpen, setIsOpen}){
    return (
        <Modal isOpen={isOpen}  onRequestClose={() => setIsOpen(false)} className="callback-modal">
            <div className="burgermenu__close callback-modal__close" onClick={()=>{setIsOpen(false)}}></div>
            <ContactForm type="callback" header="Оставьте ваш номер - мы свяжемся с вами"/>
        </Modal>
    )
}