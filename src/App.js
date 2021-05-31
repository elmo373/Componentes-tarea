import React from 'react';
import Component from './componentes/Component';
import getContentComponents from './assets/getContentComponents';
import './global.css';

export default function App() {
    const data = getContentComponents();
    //console.log(data);
    //const card = data[0]
    return (
        <div className="container_components">
            {
                data.map((component)=>{
                    return <Component data={component}/>
                })
            }
        </div>
    );
}