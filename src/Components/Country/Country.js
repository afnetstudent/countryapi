import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name,population, flag,capital,nativeName}=props.country;
    const styleFlag={
        height:'130px',
        margin:'10px',
        padding:'10px'

        
    }
    const styleDive={
        
        border:'1px solid red',
        margin:'10px',
        padding:'10px',
        width:'500px',
        display:'flex'

    }
    const styleBtn={
        margin:'10px',
        padding:'10px',
        backgroundColor:'yellow',
        color:'black',
        cursor:'pointer'

    }
    const handleClick= props.handleClick;
    return (
        <div style={styleDive}>
            <div >
                <img style={styleFlag} src={flag} alt=""/>
                <div ><button onClick={()=>handleClick(props.country)} style={styleBtn}> add Country</button></div>
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