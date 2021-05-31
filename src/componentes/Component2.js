import React from 'react';
import "./styles/Component-Frame-36.css";
// <div className=""> </div>//
export default function Component(props) {
    return (
        <>
            <div className="componentframe5_4_2">
                <div className="componentframe5_4_2__header">
                    <div className={`ctitle ${props.data1.theme}`}>
                        <p>
                            {props.data1.title}
                        </p>
                    </div>
                    <div className="puntos">
                        <img src={props.data1.point1} alt=""/>
                    </div>
                </div>
                <div className={`componente_description ${props.data1.tipo}`}>
                    <img src={props.data1.marcador} alt=""/>
                    <p>
                        {props.data1.description}
                    </p>
                </div>
                <div className="vectorline">
                        <div className='iconos'>
                            <div className="day"> 
                            <img src={props.data1.image_perfil} alt={`Avatar de ${props.data1.title}`}/>
                                <p>
                                    {props.data1.date3}
                                </p> 
                            </div> 
                            <div className="mens"> 
                                <img src={props.data1.mensage1} alt=""/> 
                                
                                <p>
                                    {props.data1.mensage2}
                                </p>
                            </div>
                            <div className="adj"> 
                                <img src={props.data1.adjunt1} alt=""/> 
                                <p>{props.data1.adjunt2}</p>
                            </div>
                            
                        </div>
                </div>
            </div>
        </>
    )
}