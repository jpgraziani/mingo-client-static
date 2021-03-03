import React from 'react';

import freeImg from '../data-img'
import './PrintPage.css'

export default class PrintsPage extends React.Component {
  render() {

    const images = [...freeImg]
    console.log(images)
    return (
      <section className='freeImg-container'>
        {images.map((item, index) => {
          return (
            <div className='img-download'>
              <img key={index} src={item} alt={index} className='img-cover'/>
              <a href={item} download>download</a>
            </div>
          );
        })}
      </section>
    );
  }
}