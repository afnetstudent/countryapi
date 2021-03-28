import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name,population, flag,capital,nativeName}=props.country;
    const styleFlag={
        height:'50px'
        
    }
    return (
        <div>
            <div >
                <img style={styleFlag} src={flag} alt=""/>
            </div>
            <div>
            <h2>Country name: {name}</h2>
            <h3> Country population: {population}</h3>
            <h3> Capital: {capital}</h3>
            <h3> Native name: {nativeName}</h3></div>
            
            
        </div>
        
    );
};

export default Country;