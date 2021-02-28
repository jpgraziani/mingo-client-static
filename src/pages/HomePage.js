import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

const HomePage = () => {
  return(
    <section>
      <Banner title={'Exploring life with family'} >
        <p>
          Mingo was inspired after the birth of my daughter when I needed to constantly find new activities and projects to do with her to keep her mind stimulated and learning.  I always found myself reaching out to friends and family to get new ideas for fun projects and activities.
        </p>
        <Link to='./contact' className='btns btn-full'>contact</Link>
      </Banner>

      <Banner title={'community by way of exploring'} />

      <Banner title={'Explore projects & activities'} >
        <p>
          Our goal is to provide a creative community as a catalyst to positively impact every family we interact with. In this pursuit, we strive to develop and nurture family relationships.

          Come explore and see what's good.
        </p>
        <Link to='./activities' className='btns btn-full'>activities</Link>
      </Banner>

      <Banner title={'Explore Color Me Prints'} >
        <p>
          We believe it's never too early to introduce kids to art. To get started, download our free activity sheets from the Mingo WorkShop, and help your kids to create crazy, silly, happy art.
        </p>
        <Link to='./prints' className='btns btn-full'>prints</Link>
      </Banner>
     
    </section>
  );
}

export default HomePage;