export function Banner({className, image, children}) {
    const bannerImage = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`};

    return <div style={bannerImage} className={`banner ${className != undefined ? className : ""}`}>
        {children != undefined && <span className="banner__text">{children}</span>}
    </div>
}