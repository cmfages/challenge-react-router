import React from 'react';
import { useState} from 'react';
import { db } from '../services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Form () {
    const data = require('../services/db.json');
    console.log(data.items)

    const uniqueId = uuid();

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ date, setDate ] = useState();
    const [ country, setCountry ] = useState();
    const [ terms, setTerms ] = useState(false);

    const userCollectionRef = collection(db, "formData");

    const MySwal = withReactContent(Swal)

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            id: uniqueId,
            name: name,
            email: email,
            date: date,
            country: country,
            terms: terms
        })
        .then(() => {
            MySwal.fire({
                title: <p>¡Formulario enviado con éxito!</p>,
                icon: 'success',
                confirmButtonText: 'Entendido',
                background: '#580066',
                color: '#fff',
                confirmButtonColor: '#d4145a'
              }).then(() => {
                document.location = '/form-list';
                
              })
        }).catch((err) => {
            alert(err.message);
        })
    }
 
    return (
        <div className='form-container'>
            <form>
            {
                data.items.map((item) => {
                    if (item.type !== 'select' && item.type !== 'submit') {
                        return (
                        <div key={item.name} className='input-container'>
                            <label htmlFor={item.name}>{item.label}</label>
                            <input type={item.type} id={item.name} name={item.name} required onChange={(event) => {
                                if (item.type === 'text') {
                                    setName(event.target.value);
                                    console.log(name);
                                } else if (item.type === 'email') {
                                    setEmail(event.target.value);
                                    console.log(email);
                                } else if (item.type === 'date') {
                                    setDate((event.target.value).toString());
                                    console.log(date);
                                } else {
                                    setTerms(event.target.checked);
                                    console.log(terms);
                                }
                            }}></input>
                        </div>
                        )
                    } else if (item.type === 'select') {
                        return (
                            <div key={item.name} className='input-container'>
                                <label htmlFor={item.name}>{item.label}</label>
                                <select key={item.name} id={item.name} name={item.name} required onChange={(event) => {
                                    setCountry(event.target.value)
                                    console.log(country)
                                }}>
                                <option key='Elije una opcion' value='Elije una opcion' disabled></option>
                                    {
                                        item.options.map(option => {
                                            return(
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        )
                    } else {
                        return (null)
                    }
                })
            }
            </form>
            <button className='form-btn' onClick={handleSubmit} type='submit' id='submitBtn' name='submitBtn' required>Enviar</button>
            <h2>Hecho por Christian M. Fages - 2023</h2>
        </div>
    )
}

export default Form;