import React from 'react'
import Layout from '../../components/Layout'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <Layout>
   <div>Home Page</div>
   <Link to={'/about'}>Go to About Us</Link>
    </Layout>
    
  )
}
export default HomePage
