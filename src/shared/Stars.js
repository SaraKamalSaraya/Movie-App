import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

export default function Stars (props) {
    let {rating} = props
    rating = rating/2
    
    const stars = [null]
    for (let x=0; x < 5; x++){
        if (rating >= 1) {
            stars.push(<FontAwesomeIcon icon={fullStar} key={x} style={{color: "#fbe352"}}/>)
            rating -= 1
        } else if ( 0 < rating ) {
            stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={x} style={{color: "#fbe352"}}/>)
            rating = 0
        } else {
            stars.push(<FontAwesomeIcon icon={emptyStar} key={x} style={{color: "#fbe352"}}/>)
        }
    }

    return <div className="rating">{stars}</div>
}