import step1 from '../../images/location/step1.jpg';
import step2 from '../../images/location/step2.jpg';
import step3 from '../../images/location/step3.jpg';
import step4 from '../../images/location/step4.jpg';

export default function Scheme () {

    return (
        <div className="scheme">
            <div className="scheme__wrapper">
                <h3 className="h3">Схема прохода</h3>
                <div className="scheme__images-wrapper">
                    <img src={step1} alt="Шаг 1" className="scheme__image"/>
                    <img src={step2} alt="Шаг 2" className="scheme__image"/>
                    <img src={step3} alt="Шаг 3" className="scheme__image"/>
                    <img src={step4} alt="Шаг 4" className="scheme__image"/>

                </div>
            </div>
        </div>
    )
}