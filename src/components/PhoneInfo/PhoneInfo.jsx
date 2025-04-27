export default function PhoneInfo ({header, description}) {

    return (
        <div className="phone-info">
            <div className="phone-info__wrapper">
                <h3 className="h3 phone-info__h3">{header}</h3>
                <p className="p phone-info__p">{description}</p>
            </div>
        </div>
    )
}