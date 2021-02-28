import React from 'react';

const Banner = ({children, title}) => {
  return (
    <section className='banner'>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Banner;