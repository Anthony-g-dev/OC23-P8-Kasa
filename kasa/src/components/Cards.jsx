export function Card({image, children}) {
    const cardImage = {backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${image})`};

    return <div style={cardImage} className="card">
        <span className="card__text">{children}</span>
    </div>
}