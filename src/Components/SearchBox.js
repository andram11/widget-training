import React, {Fragment} from 'react';

export default function SearchBox({searchChange}){
    return(
        <Fragment>
            <input className='f3' onChange={searchChange} type='search' placeholder='search training' />
        </Fragment>
        
    )
    
}