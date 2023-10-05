import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function All_Movies() {
  return (
    <div>
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Popular Movies</h3>
        {/* Cards */}
        <div className='d-flex justify-content-between'>
          <div className="card border-0" style={{ width: '12rem', borderRadius:'1rem' }}>
            <img src={"https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg"}
             className="card-img-top" style={{ borderRadius:'1rem 1rem 0 0' }} alt="..." />
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
