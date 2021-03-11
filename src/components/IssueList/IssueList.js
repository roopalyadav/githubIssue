import React from 'react';

import './IssueList.css';




export default function IssueList({list}) {
     
    
    return (
       

    <div style={{  width: '100%' , marginBottom:"30px"}}>

        {
           list.map((item, index)=>(
               <div className="issuelist--div" key={index}>
                   <a href={item.html_url} ><p className="item--title">{item.title}</p></a>
                   <p style={{color:'#807c7c',paddingTop:'9px',fontSize:'13px', textAlign:"left", margin:"0"}}>#{item.number} opened by {item.user.login}</p>
                
               </div>

    ))

    
        }

    </div>
  );
}

       
