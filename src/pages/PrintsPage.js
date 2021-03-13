import React from 'react';

import freeImg from '../free-img'
import './PrintPage.css'

export default class PrintsPage extends React.Component {
  render() {
    const images = [...freeImg]
    return (
      <section className='freeImg-container'>
        {images.map((item, index) => {
          return (
            <div className='img-download' key={index}>
              <img key={index} src={item} alt={index} className='img-cover'/>
              <div className='download-btn'><a href={item} download>download</a></div>
            </div>
          );
        })}
      </section>
    );
  }
}