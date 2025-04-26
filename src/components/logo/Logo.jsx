import { Link } from "react-router-dom";

export default function Logo ({className}) {
    return (
        <Link to="/" className={className + ` logo`}>ЯбСделал</Link>
    )
}