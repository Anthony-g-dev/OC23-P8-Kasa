import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Stars({count}) {
    let content = [];

    for (let i = 1; i <= 5; i++) {
        content.push(<FontAwesomeIcon icon={faStar} className={`ratingStar ${i <= count ? "ratingStar--full" : ""}`} key={i} />);
    }

    return <div className="ratingStarsContainer">{content}</div>;
}