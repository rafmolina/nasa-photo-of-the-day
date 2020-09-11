import React from 'react';

const Image = (props) => {
    //console.log(props)
    if(props.image){
        return (

           <img alt='nasa' src={props.image} />
           
        )
    }
    else {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }
}

export default Image;