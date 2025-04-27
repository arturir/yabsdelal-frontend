import Modal from 'react-modal';
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from 'react';

Modal.setAppElement('#root');

export default function CallbackModal ({isOpen, setIsOpen}){

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("body_no-scroll");
        } else {
            document.body.classList.remove("body_no-scroll");
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen}  onRequestClose={() => setIsOpen(false)} className="callback-modal">
            <div className="close-button close-button--callback" onClick={()=>{setIsOpen(false)}}></div>
            <ContactForm type="callback" header="Оставьте ваш номер - мы свяжемся с вами"/>
        </Modal>
    )
}