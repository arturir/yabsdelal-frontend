import privacy from '../../assets/privacy.pdf';

const PrivacyPolicy = () => {
  return (
    <iframe
      src={privacy}
      title="Политика конфиденциальности"
      width="100%"
      height="100%"
      style={{ minHeight: '100vh', border: 'none' }}
    />
  );
};

export default PrivacyPolicy;