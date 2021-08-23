import React from "react";
import {Link} from "react-router-dom";

export let ButtonOne = () => {




    return (
        <div>
            <Link to='/' className='btn btn-danger mx-2'>1</Link>
            <Link to='/1' className='btn btn-danger mx-2'>2</Link>
            <Link to='/1' className='btn btn-danger mx-2'>3</Link>
        </div>

    )
}