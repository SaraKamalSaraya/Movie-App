import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Movie_List() {
  const img = require('./img.jpg')

  return (
    <div className="text-start" style={{ padding: '2% 7%' }}>
      <div className='p-5' style={{ backgroundColor: '#f3f1f1' }}>
        <h3 className='text-black fw-bold mb-4'>Welcome to our movie app</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="d-flex mb-3">
          <input type="text" className="form-control me-3 border-0" placeholder="Search and explore...." />
          <button className="btn btn-outline-secondary border-0 text-black px-4" style={{ backgroundColor: '#fbe352' }} type="button">Search</button>
        </div>
      </div>
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Popular Movies</h3>
        {/* Cards */}
        <div className='d-flex justify-content-between'>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={img} className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-black">The Good Doctor</h5>
              <div className='d-flex justify-content-between'>
                <p className="card-text text-secondary">Sep 25, 2017</p>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick='' />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
