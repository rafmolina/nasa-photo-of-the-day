import React from 'react';

const Title = (props) => {
    //console.log(props)
    if (props.title) {
        return (
            <div>
                <h1>{props.title}</h1>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }
};

export default Title;