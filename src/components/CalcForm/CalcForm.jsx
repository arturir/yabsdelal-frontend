import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useGetBrandsQuery } from "../../slices/priceApi";
import { useLazyGetModelsByBrandQuery } from "../../slices/priceApi";
import { addFormOrder, goToNextPage } from "../../slices/orderFormSlice";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import TabsContainer from "../TabsContainer/TabsContainer";

export default function Calc ({defaultBrandId=""}) {

  const { data: brands, isLoading: isLoadingBrands, isSuccess: isSuccessBarnds, isError: isErrorBrands } = useGetBrandsQuery();
  const [ getModels, { data: models, isSuccess: isSuccessModels, isError: isErrorModels} ] = useLazyGetModelsByBrandQuery();

  const [brandsList, setBrandsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [price, setPrice] = useState();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { brand: defaultBrandId , model: "", service: "" },
    onSubmit: ({brand, model, service}) => {
      dispatch(addFormOrder({brand, model, service}));
      dispatch(goToNextPage());
    },
  });

  useEffect(() => {
    if (isSuccessBarnds && !isErrorBrands) { 
      setBrandsList(brands);
    }
  }, [isSuccessBarnds]);

  useEffect(() => {
    if (isSuccessBarnds && !isErrorBrands) { 
      if (defaultBrandId) {
        formik.setValues({...formik.values, brand: defaultBrandId});
      } else {        
        formik.setValues({...formik.values, brand: brands[0]?._id});
      }
    }
  }, [brandsList])

  useEffect(()=> {
      setModelsList([]);
      setServicesList([]);
      setPrice();
      getModels(formik.values.brand);
  }, [formik.values.brand]);

  useEffect(()=> {
    if(isSuccessModels && !isErrorModels) {
      setModelsList(models);
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
              {price && (<><p className="p">Нажмите &quot;Далее&quot; чтобы узнать точную стоимость ремонта.</p><p className="p-small">Расчёт стоимости, предоставляемый на сайте, является предварительным и не является публичной офертой. Стоимость работы указана без детали.</p></>)}
              <button type="submit" className="form__button form__button--type-next" disabled={servicesList?.length===0 || modelsList?.length===0}>Дальше →</button>
            </form>)}
            </div>
            <div className="calc__column-right">
              <TabsContainer />
            </div>
          </div>
      </div>
  )
}