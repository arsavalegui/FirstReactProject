import "./Card.css" //import de estilos css
import React from 'react'
import { Link } from "react-router-dom"//biblioteca link para poder acceder a las rutas que deseemos

function Card({title="Sin valor", description="Sin valor"}) { //props contiene las propiedades de react que le pasemos puede llamarse así (props) o se puede descomponer el objeto en sus atributos, ({atributo 1="valor pro defecto",...})
  return (
    <div className='Card'>
        <Link to={title}><h2>{title}</h2></Link>
        <p>{description}</p>
    </div>
  )
}

export default Card