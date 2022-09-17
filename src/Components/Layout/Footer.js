import React from 'react'

const Footer = () => {
  return (
    <div className='footer' data-aos="fade-up">
      <div className='container footer-area'>
        <div className='d-flex align-items-center '>
          <div className='footer-social'>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-linkedin'></i>
          </div>
          <div >
            <ul className='footer-links'>
              <li><a href='#'>Terms of Service</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Trust & Safety</a></li></ul>
          </div>
        </div>
        <div className='language'>
          <label>Language: </label>
          <select>
            <option>En</option>
            <option>Aze</option>
            <option>Rus</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default Footer