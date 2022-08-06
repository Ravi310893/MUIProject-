import React from 'react'
import Layout from '../../components/Layout'
import {Link} from 'react-router-dom'

const AboutPage = () => {
  return (
    <Layout>
   <div>About Page</div>
   <Link to={'/'}>Go to Home</Link>
    </Layout>
    
  )
}
export default AboutPage