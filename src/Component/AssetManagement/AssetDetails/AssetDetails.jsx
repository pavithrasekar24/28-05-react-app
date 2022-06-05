import React,{useState} from 'react';
let age=0;
 function AssetDetails(){
//   const [place,setPlace]=useState('chennai');
  const [address,setAddress]=useState({
      place:'',
  })
  let handleChange=(e)=>{
      console.log(e,e.target.value);
    //   setPlace(e.target.value);
    let addr={...address};
    addr.place=e.target.value;
    setAddress(addr)
  }
     age=27;
    return(
        <React.Fragment>
        <h1>Details1 {age} {address.place}</h1>
        <h1>Details2</h1>
        <input type="text" name="place" value={address.place} onChange={handleChange} />
        </React.Fragment>
    )
}

function Assets(){
    return(
        <React.Fragment>
        <h1>Asst1</h1>
        <h1>Asst1</h1>
        </React.Fragment>
    )
}

export {Assets, AssetDetails};