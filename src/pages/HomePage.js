import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import homePageImg from  '../data-img'
import './HomePage.css'

const HomePage = () => {
  return(
    <div className='container'>
      <section className='about-container'>
        <div className='about-group'>
          <Banner title={'Explore projects & activities'} >
            <p>
              Our goal is to provide a creative community as a catalyst to positively impact every family we interact with. In this pursuit, we strive to develop and nurture family relationships.

              Come explore and see what's good.
            </p>
            <Link to='./activities' className='btns btn-full'>activities</Link>
            <Link to='./add-activity' className='btns btn-full'>add activity</Link>
          </Banner>
        </div>
        <div className='img-ratio'>
          <img src={homePageImg[0]} alt='paint-on-wood-table' />
        </div>
      </section>
      
      <section className='quote-container'>
        <div className='text-container'>
          <h2 className="quote">
            Community <br />
            by way <br />
            of exploring
            </h2>
        </div>
      </section>
     
      <section className='activities-container'>
        <div className='img-ratio-flipped'>
          <img src={homePageImg[1]} alt='paper-artwork-folded-black-strips' />
        </div>
        <div className='activities-group'>
          <Banner title={'Exploring life with family'}>
            <p>
              Mingo was inspired after the birth of my daughter when I needed to constantly find new activities and projects to do with her to keep her mind stimulated and learning.  I always found myself reaching out to friends and family to get new ideas for fun projects and activities.
            </p>
            <Link to='./contact' className='btns btn-primary'>contact</Link>
          </Banner>
        </div>
      </section>
      
      <section className='prints-container'>
        <div className='prints-group'>
          <Banner title={'Explore Color Me Prints'}>
            <p>
              We believe it's never too early to introduce kids to art. To get started, download our free activity sheets from the Mingo WorkShop, and help your kids to create crazy, silly, happy art.
            </p>
            <Link to='./prints' className='btns btn-full'>prints</Link>
          </Banner>
        </div>
        <div className='img-ratio'>
          <img src={homePageImg[2]} alt='yellow-crayon' />
        </div>
      </section>
    </div>
  );
}

export default HomePage;