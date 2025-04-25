import { useState } from "react";
import Dialog from "../Diaolg/Dialog";
import CallbackModal from "../CallbackModal/CallbackModal";
import PhoneMessenger from "../PhoneMessenger/PhoneMessenger";

export default function ContactUs () {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="contact-us">
            <div className="contact-us__wrapper">
                <div className="contact-us__column-left">
                    <Dialog />
                </div>
                <div className="contact-us__column-right">
                    <h3 className="h3">С нами легко связаться и обсудить детали ремонта</h3>
                    <p className="p">Свяжитесь с нами через мессенджеры: WhatsApp, Telegram, Вконтакте или по телефону. 
                        Мы подскажем и ответим на любой ваш вопрос.
                    </p>
                    <PhoneMessenger />
                    <button type="button" className="form__button" onClick={()=>setModalIsOpen(true)}>Перезвонить мне</button>
                </div>
                <CallbackModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}/>
            </div>
        </div>
    )
}