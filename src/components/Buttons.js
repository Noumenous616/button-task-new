import React, {useState} from "react";
import {Link} from "react-router-dom";
import s from './buttons.module.css'

export let Buttons = () => {

let [state, setState] = useState(1)
    return (
        <div className={s.buttonForm}>
            <div>
                <Link to='/' className='btn btn-warning'>{state}</Link>
            </div>
            <Link to='/' className='btn btn-danger mx-2'>1</Link>
            <Link to='/1' onClick={() => setState(state=2)} className='btn btn-danger mx-2'>2</Link>
            <Link to='/1'  onClick={() => setState(state=3)} className='btn btn-danger mx-2'>3</Link>
        </div>

    )
}