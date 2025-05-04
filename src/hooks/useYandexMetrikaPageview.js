import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const YANDEX_METRIKA = process.env.REACT_APP_YANDEX_METRIKA;

const useYandexMetrikaPageview = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.ym) {
      window.ym(YANDEX_METRIKA, 'hit', location.pathname + location.search);
    }
  }, [location]);
};

export default useYandexMetrikaPageview;