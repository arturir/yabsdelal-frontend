import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useGetBrandsQuery } from "../../slices/priceApi";
import { useLazyGetModelsByBrandQuery } from "../../slices/priceApi";
import { addFormOrder, goToNextPage } from "../../slices/orderFormSlice";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import { Link } from "react-router-dom";

export default function Calc ({defaultBrandId=""}) {

  const {data: brands, error: errorBrands, isLoading: isLoadingBrands, isSuccess: isSuccessBarnds, isError: isErrorBrands, refetch} = useGetBrandsQuery();
  const [getModels, { data: models, isLoading: isLoadingModels, isSuccess: isSuccessModels, error: errorModels, isError: isErrorModels}] = useLazyGetModelsByBrandQuery();

  const [brandsList, setBrandsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [price, setPrice] = useState();
  const [activeTab, setActiveTab] = useState("garanty");


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { brand: defaultBrandId , model: "", service: "" },
    onSubmit: ({brand, model, service}) => {
      console.log(brand, model, service)
      dispatch(addFormOrder({brand, model, service}));
      dispatch(goToNextPage());
    },
  });

  useEffect(()=> {
    if (isSuccessBarnds && !isErrorBrands) {
      setBrandsList(brands);
      formik.setValues({...formik.values, brand: brands[0]?._id});
    }
  }, [isSuccessBarnds]);

  useEffect(()=> {
      console.log("выбор бренда", formik.values.brand)
      setModelsList([]);
      setServicesList([]);
      setPrice();
      getModels(formik.values.brand);
  }, [formik.values.brand]);

  useEffect(()=> {
    console.log("полученые модели", models)
    if(isSuccessModels && !isErrorModels) {
      console.log(isSuccessModels, !isErrorModels, errorModels)
      console.log("полученые модели", models)
      setModelsList(models); //при выборе пустого бренда будут старные данные о моделях
      formik.setValues({...formik.values, model: models[0]?._id});
    }
  }, [models, isSuccessModels]);

  useEffect(()=> {
    const newModel = modelsList.find(item => item._id===formik.values.model);
    setServicesList(newModel?.services);
    formik.setValues({...formik.values, service: newModel?.services[0]?._id});
    setPrice(newModel?.services[0]?.price);
  }, [formik.values.model]);

  useEffect(()=> {
    setPrice(servicesList?.find(item => item._id===formik.values.service)?.price);
  }, [formik.values.service, servicesList]);

  return (
    
      <div className="calc">
        <div className="calc__wrapper">
          <div className="calc__column-left">
            <h3 className="h3 calc__h3">Стоимость ремонта</h3>
            {isErrorBrands && (<StatusIndicator status="error"/>)}
            {isLoadingBrands && (<StatusIndicator status="loading"/>)}
            {isSuccessBarnds && (<form className="form" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
              {!defaultBrandId &&
                <>
                  <label htmlFor="brand" className="p">Выберите марку телефона</label>
                  <select name="brand" className="form__input" value={formik.values.brand} onChange={formik.handleChange} >
                    {brandsList?.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))}
                  </select>
                </>
              }
              <label htmlFor="brand" className="p">Выберите модель телефона</label>
              <select name="model" className="form__input" value={formik.values.model} onChange={formik.handleChange}  disabled={modelsList?.length===0}>
                {modelsList?.length>0?
                  modelsList?.map(item => (<option value={item._id} key={item._id}>{item.name}</option>)) 
                  :
                  (<option>Список моделей пуст</option>)
                }
              </select>
              <label htmlFor="service" className="p">Выберите  услугу</label>
              <select name="service" className="form__input" value={formik.values.service} onChange={formik.handleChange} disabled={servicesList?.length===0}> 
                {servicesList?.length>0 ?
                  servicesList?.map(item => (<option value={item._id} key={item._id}>{item.name}</option>)) 
                  :
                  <option>Список услуг пуст</option>
                }
              </select>         
              {price && (<h3 className="h3 calc__total">Итого: <b>{price}₽</b></h3>)}
              {price && (<><p className="p">Нажмите "Далее" чтобы узнать точную стоимость ремонта.</p><p className="p-small">Расчёт стоимости, предоставляемый на сайте, является предварительным и не является публичной офертой. Стоимость работы указана без детали.</p></>)}
              <button type="submit" className="form__button form__button--type-next" disabled={servicesList?.length===0 || modelsList?.length===0}>Дальше →</button>
            </form>)}
            </div>
            <div className="calc__column-right">
              {activeTab==="garanty" && (<div className="calc__content">
                <h3 className="h3 calc__h3">Наша гарантия</h3>
                <p className="p">
                Наша гарантия - ваша защита.  Предоставляем гарантию на ремонт. 
                Выдаем все необходимые документы. Акт приема, гарантийный талон и
                акт выдачи, а также чек.
                </p>
                <ul className="calc__list">
                  <li className="calc__list-item p">На аккумуляторы iPhone original - 6 месяцев</li>
                  <li className="calc__list-item p">На оригинальные сервисные запчасти – 3 месяца</li>
                  <li className="calc__list-item p">На аккумуляторы - 3 месяца</li>
                  <li className="calc__list-item p">Все остальное - от 1 месяца</li>
                </ul>
              </div>)}
              {activeTab==="term" && (<div className="calc__content">
                <h3 className="h3 calc__h3">Сроки исполнения</h3>
                <p className="p">
                Мы ценим ваше время и стараемся выполнять ремонт максимально быстро.
                Уточнённое время всегда озвучивается при приёме устройства. 
                Мы придерживаемся сроков и сообщаем, если что-то меняется.
                </p>
                <ul className="calc__list">
                  <li className="calc__list-item p">Замена аккумулятора iPhone - 1-2 часа</li>
                  <li className="calc__list-item p">Замена дисплея iPhone - 1-2 часа</li>
                  <li className="calc__list-item p">Замена задней крышки iPhone - до 4 часов</li>
                  <li className="calc__list-item p">Замена дисплея Android -  2-4 часа</li>
                  <li className="calc__list-item p">Остальной модульный ремонт - 2-3 часа</li>
                  <li className="calc__list-item p">Компонентный ремонт (пайка, восстановление цепей) - от 1 дня</li>
                </ul>
              </div>)}
              {activeTab==="search" && (<div className="calc__content">
                <h3 className="h3 calc__h3">Не нашли своё устройство?</h3>
                <p className="p">
                  Если вы не нашли своё устройство в списке — не беда. 
                  Мы работаем с большим количеством моделей и поможем вам даже в нестандартных случаях.
                  Ответим быстро, подскажем по срокам и сориентируем по цене.
                  Просто напишите нам в удобный мессенджер — уточним возможность и стоимость ремонта.
                </p>
                <ul className="calc__list">
                  <li className="calc__list-item p">WhatsApp / Telegram: <Link to="tel:+79300304430" className="calc__href">+7 (930) 030 44 30</Link></li>
                  <li className="calc__list-item p">ВКонтакте: <Link to="https://vk.com/remontiphonevladimir" className="calc__href">vk.com/remontiphonevladimir</Link></li>
                </ul>
              </div>)}
              <ul className="calc__nav">
                <li className={`calc__tab ${activeTab === "garanty" ? "calc__tab_active" : ""}`}onClick={()=>setActiveTab("garanty")} >Про гарантию →</li>
                <li className={`calc__tab ${activeTab === "term" ? "calc__tab_active" : ""}`} onClick={()=>setActiveTab("term")}>Сроки исполнения →</li>
                <li className={`calc__tab ${activeTab === "search" ? "calc__tab_active" : ""}`} onClick={()=>setActiveTab("search")}>Нет вашего устройства →</li>
              </ul>
            </div>
          </div>
      </div>
  )
}