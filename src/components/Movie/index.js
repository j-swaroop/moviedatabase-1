import './index.css'

const Movie = props => {
    const {details} = props
    return(
        <li>
            <img src={details.posterPath} />
        </li>
    )
}

export default Movie