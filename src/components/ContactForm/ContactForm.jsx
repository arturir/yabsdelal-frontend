import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { resetNavigation } from "../../slices/orderFormSlice";
import { IMaskInput } from "react-imask";
import {useSendOrderMutation, useSendCallbackMutation} from "../../slices/orderApi";
import StatusForm from "../StatusForm/StatusForm";

const validationSchema = Yup.object({
  tel: Yup.string()
    .required("Обязательное поле")
    .matches(
      /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      "Неверный номер телефона"
    ),
  name: Yup.string()
  .required("Обязательное поле")
  .min(2, "Минимум 2 символа")
  .max(32, "Максимум 32 символа")
  .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Имя не должно содержать цифры или спецсимволы"),
  privacy: Yup.boolean()
  .oneOf([true], "Для отправки данных вы должны принять условия")
  .required("Подтверждение обязательно"),
});

export default function ContactForm({type="", header=""}) {

  const orderForm = useSelector(state => state.orderForm);
  const [sendOrder, {error: sendOrderError, isLoading: isSendingOrder, isSuccess: isSuccessOrder,}] = useSendOrderMutation();
  const [sendCallback, {error: sendCallbackError, isLoading: isSendingCallback, isSuccess: isSuccessCallback}] = useSendCallbackMutation();

  const formik = useFormik({
    initialValues: { name: "", tel: "", contactMethod: "phone", privacy: false},
    onSubmit:  (values, actions) => {
      if (type==="order") {
        const data = {customer: values.name, phone: values.tel.replace(/[\s()-]/g, ''), modelID: orderForm.model, serviceID: orderForm.service, contactMethod: values.contactMethod};
        sendOrder(data);
        actions.setSubmitting(false);
      } else {
        sendCallback({customer: values.name, phone: values.tel.replace(/[\s()-]/g, ''), contactMethod: values.contactMethod});
        actions.setSubmitting(false);
      }
      actions.resetForm();
    },
    validationSchema: validationSchema
  });
  
  const dispatch = useDispatch();
  const buttonPrevHandler = () => {
    dispatch(resetNavigation());
  }
    

  return (
      <div className="contact">
      <div className="contact__wrapper">
        <h3 className="h3 contact__h3">{header}</h3>
        <StatusForm isSendingOrder={isSendingOrder} isSendingCallback={isSendingCallback}
          isSuccessOrder={isSuccessOrder} isSuccessCallback={isSuccessCallback}
          sendOrderError={sendOrderError} sendCallbackError={sendCallbackError}
        /> 
        {!(isSendingOrder || isSendingCallback || isSuccessOrder || isSuccessCallback || sendOrderError || sendCallbackError) && (<form className="form" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
          <label htmlFor="brand" className="p">Номер телефона</label>

          <IMaskInput mask="+7 (000) 000-00-00" name="tel"  className="form__input" value={formik.values.tel}  
            onAccept={(value) => formik.setFieldValue("tel", value)} onBlur={formik.handleBlur} />
          {formik.touched.tel && formik.errors.tel && (
          <p className="form__error-text">{formik.errors.tel}</p>
          )}
          <label htmlFor="brand" className="p">Ваше имя</label>
          <input name="name" className="form__input" value={formik.values.name} onChange={formik.handleChange} />
          {formik.touched.name && formik.errors.name && (
          <p className="form__error-text">{formik.errors.name}</p>
          )}
          <p  className="p">Предпочтительный способ связи</p> 
          <div className="form__radiobox-group">
            <label className="form__radiobox-wrapper p">
                <input type="radio" name="contactMethod" className="form__radiobox" value="phone" onChange={formik.handleChange}
                checked={formik.values.contactMethod === "phone"} />
                <span className="form__radiobox-custom"></span>
                По телефону
            </label>
          
            <label className="form__radiobox-wrapper p">
              <input type="radio" name="contactMethod" className="form__radiobox" value="sms" onChange={formik.handleChange}
              checked={formik.values.contactMethod === "sms"} />
              <span className="form__radiobox-custom "></span>
              Написать мне в мессенджерах (Telegram/Другой мессенджер) или SMS
            </label>
          </div>
          <div className="form__checkbox-group">
            <label className="form__checkbox-wrapper">
              <input type="checkbox" name="privacy" className="form__checkbox" onChange={formik.handleChange} />
              <span className="form__checkbox-custom"></span>
              <p className="p">Я согласен с  <Link to="/privacy" className="contact__href" target="_blank">политикой конфиденциальности</Link> и даю свое согласие на <Link to="/privacy" className="contact__href" target="_blank"> обработку персональных данных.</Link></p>
            </label>
            {formik.touched.privacy && formik.errors.privacy && (
            <p className="form__error-text form__error-text--privacy">{formik.errors.privacy}</p>
            )}
          </div>
          <div className="form__button-group">
          {type==="order" && (<button type="button" className="form__button form__button--type-prev" onClick={buttonPrevHandler}>←</button>)}
          <button type="submit" className="form__button">Подтвердить</button>
          </div>
        </form>)}
      </div>
      </div>
  )
    
}