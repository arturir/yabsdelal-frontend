import React from "react";
import StatusIndicator from "../StatusIndicator/StatusIndicator";

export default function StatusForm ({isSendingOrder, isSendingCallback, isSuccessOrder, isSuccessCallback, sendOrderError, sendCallbackError}) {

    const visible = isSendingOrder || isSendingCallback || isSuccessOrder || isSuccessCallback || sendOrderError || sendCallbackError;

    return (
        <>
        {visible && (<div className="contact__sent-form">
            {(isSendingOrder || isSendingCallback) &&
                (<>
                    <StatusIndicator status="loading"/>
                    <p className="p-small">Отправка данных...</p>
                </>)
            }
            {(isSuccessOrder || isSuccessCallback) &&
                (<>
                    <StatusIndicator status="success"/>
                    <p className="p-small">Спасибо! Свяжемся с вами в ближайшее время.</p>
                </>)
            }
            {(sendOrderError || sendCallbackError) &&
                (<>
                    <div onClick={()=>window.location.reload()}><StatusIndicator status="retrying"  /> </div>
                    <p className="p-small">Ошибка - требуется перезагрузка страницы.</p>
                </>)
            }
        </div>)}
        </>
    )
}