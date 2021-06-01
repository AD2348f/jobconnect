import React from 'react';

const AdSearchList = ({adList=[]}) => {
  return (
    <>
    { adList.map((data,index) => {
        if (data) {
          return (
            <div key={index}>
              <h1>{data.addTitle}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default AdSearchList