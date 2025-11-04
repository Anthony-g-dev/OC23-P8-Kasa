export function Banner({className, image, gradientOpacity = 0.3, children}) {
    const bannerImage = {backgroundImage: `linear-gradient(rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 0, 0, ${gradientOpacity})), url(${image})`};

    return <div style={bannerImage} className={`banner ${className != undefined ? className : ""}`}>
        {children != undefined && <span className="banner__text">{children}</span>}
    </div>
}