export default function Map ({width="480px", height="320px"}) {
    return (
        <div style={{width: width, height: height, borderRadius: "20px", overflow: "hidden"}}>
            <iframe src="https://yandex.ru/map-widget/v1/?z=15&ol=biz&oid=19637641765" width={width} height={height} frameBorder="0"></iframe>
        </div>
    )
}