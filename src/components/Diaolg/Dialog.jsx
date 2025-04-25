import { motion } from 'framer-motion';

const AnimationMessage = ({children, delay=0}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.3 || 0.6, ease: 'backOut' }}
            viewport={{ once: true, amount: 0.3 }} // один раз, когда 30% элемента в зоне видимости
            className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-20"
        >
            {children}
      </motion.div>
    )
}

export default function Dialog () {
    return (
        <div className="dialog">
            <div className="dialog__wrapper">
                <div className="dialog__left-column">
                    <div className="dialog__chat">
                        <AnimationMessage delay={0.5}>
                            <div className="dialog__message dialog__message-right">
                                <p className="dialog__message-text p">Сколько стоит замена дисплея на iPhone?</p>
                                <p className="dialog__message-time p-small">10:34</p>
                            </div>
                        </AnimationMessage>
                        <AnimationMessage delay={1.5}>
                        <div className="dialog__message dialog__message-left">
                            <p className="dialog__message-text p">Уточните, пожалуйста, точную модель</p>
                            <p className="dialog__message-time p-small">10:35</p>
                        </div>
                        </AnimationMessage >
                        <AnimationMessage delay={2.5}>
                        <div className="dialog__message dialog__message-right">
                            <p className="dialog__message-text p">Я не знаю, подскажите как узнать модель...</p>
                            <p className="dialog__message-time p-small">10:36</p>
                        </div>
                        </AnimationMessage>
                    </div>
                </div>
                <div className="dialog__right-column">
                    
                </div>
            </div>
        </div>
    )
}