/* eslint-disable react/prop-types */
export default function Movie(props){
    console.log(props.data.poster)
    return (
        <article>
            <h3>{props.data.title}</h3>
            <p>Year: {props.data.year}</p>
            <p>Cast: {props.data.actors}</p>
            <img src={props.data.poster} alt='Poster not avaible!'></img>
            <hr/>
        </article>
        
    )
}