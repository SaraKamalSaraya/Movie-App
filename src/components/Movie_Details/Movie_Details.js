import React from 'react'

function Movie_Details() {
  return (
    <div className='mov-details'>
    <div className='row' style={{justifyContent:"space-between"}}>
      <div className='col-lg-3 col-md-4 col-sm-6' style={{height:"600px"}}>
        <div style={{height:"100%",width:"100%",padding:"25px"}}>
        <img src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg" style={{width:"100%",height:"100%",borderRadius:"27px"}}/>
        </div>
      </div>

      <></>

      <div className='col-lg-9 col-md-8 col-sm-6' style={{padding:"25px"}}>
        <div style={{height:"100%",width:"70%",padding:"25px"}}>
          <h1 className='p-3'>Black Widow</h1>
          <h1 className='p-3 text-success'>* * * * *</h1>
          <p className='p-3'>Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.</p>
          <div className='category row mx-2'>
          <button className='btn btn-warning mx-2 col-2'>Action</button>
          <button className='btn btn-warning mx-2 col-2'>Crime</button>
          <button className='btn btn-warning mx-2 col-2'>Thriller</button>
          </div>
          <div className='time-lang d-flex row p-3'>
            <p className='col-6'>Duration : 134 mn</p>
            <p className='col-6'>language : English</p>
          </div>
          <div className='stdio-img m-3' style={{height:"47px",width:"210px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZmU4EgLtHcFjqxnhjO1E4dky785IkhJVtYnvdKe0eb1OMfUTwo2VCAPtYflfEqWYjTM&usqp=CAU" style={{height:"100%",width:"100%"}}/>
          </div>
          <button className='btn btn-success m-3'>Website@</button>
        </div>
      </div>
    </div>
    <hr style={{ margin:"32px",border: "1px solid black" }} />
      
    </div>
  )
}

export default Movie_Details ;