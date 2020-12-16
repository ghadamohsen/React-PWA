import  React  from 'react';
import {Link} from 'react-router-dom'


export default function Home(){
    return(
        <div className='home'>
            <div>
                <h1>Check The Weather Any Where</h1>
                <h2><Link to="/about">Go...</Link></h2>

            </div>
            
        </div>
    )
}
