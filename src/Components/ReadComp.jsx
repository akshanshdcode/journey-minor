import React from 'react';
import Style from './ReadComp.module.css'
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function ReadComp(props) {
    return (
    <div className={Style.readblog_parent} style={{backgroundImage:`url(${props.Image})`}}>
        <div style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgb(56, 142, 60)",borderRadius:"8px", borderWidth:"2px",borderColor:"white"}}>
            <p style={{textAlign:"justify",color:'white'}}>{props.Content}</p>
        </div>
        <div className="m-auto 0px p-4 bg-white rounded-md text-start">
        <Heading as='h2' size='2xl' className="m-2 text-green-700">{props.Title}</Heading>
        <Heading as='h3' size='md' className="m-2 mt-4 text-green-700">{props.Subtitle}</Heading>
        <div className="mt-5 ml-2">
        <Link to="/blogs" className="bg-green-700 text-white px-4 py-2 border border-green-700 rounded-md hover:bg-white hover:text-green-900 hover:font-bold hover:hover:border-green-700">Go Back</Link>
        </div>
        </div>
    </div>
    );
}

export default ReadComp;