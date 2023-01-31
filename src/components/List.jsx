import React from 'react';
import { Link } from 'react-router-dom';
import { useCollectionData } from "react-firebase-hooks/firestore"
import { db } from '../services/firebaseConfig'
import { collection } from "firebase/firestore";
import { MdOutlinePersonOutline, MdAlternateEmail, MdCalendarToday, MdPlace } from 'react-icons/md';


function List () {
    const query = collection(db, "formData");
    const [ docs, loading ] = useCollectionData(query)

    return (
        <div className='formList-container'>
            {loading && <p className='loading'>Cargando...</p>}
            <div className='card-container'>
                {docs?.map((doc) => {
                    return (
                        <div key={Math.random()} className='form-card'>
                            <p className='full-name'><MdOutlinePersonOutline  className='icon'/><b>Nombre completo:</b> {doc.name}</p>
                            <p><MdAlternateEmail className='icon'/><b>Correo electrónico:</b> {doc.email}</p>
                            <p><MdCalendarToday  className='icon'/><b>Fecha de Nacimiento:</b> {doc.date}</p>
                            <p><MdPlace  className='icon'/><b>País de origen:</b> {doc.country}</p>
                        </div>
                    )
                })}
            </div>
            <Link to='/'><button className='form-btn'>Regresar al Formulario</button></Link>
            <h2>Hecho por Christian M. Fages - 2023</h2>
        </div>
    );
}

export default List;