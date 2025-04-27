import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PageNotFound() {

  const navigate = useNavigate();

  return (
    <>
    <Helmet>
      <title>Страница не найдена</title>
      <meta name="description" content="Увы, страница не найдена. Попробуйте выбрать страницу из меню." />
    </Helmet> 
    <section className="page-not-found">
          <h2 className="page-not-found__title">404</h2>
          <p className="page-not-found__description">Страница не найдена</p>
          <p className="page-not-found__link" onClick={() => navigate(-1)}>Назад</p>
    </section>  
    </>
  );
}
