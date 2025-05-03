import privacy from '../../assets/privacy.pdf';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <p className="privacy-policy__text-link">
        Скачать <a href="/privacy.pdf" download className="privacy-policy__link"> политику конфиденциальности</a> и <a href="/privacy.pdf" download className="privacy-policy__link">обработку персональных данных</a>
      </p>
    <iframe
      src={privacy}
      title="Политика конфиденциальности"
      width="100%"
      height="100%"
      style={{ minHeight: '100vh', border: 'none' }}
    />
    </div>
  );
};

export default PrivacyPolicy;