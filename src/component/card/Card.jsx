import "./Card.css";

const Card = ({children}) => {
    return (
        <div className="card-bg">
            {children}
        </div>
    )
}

export default Card;