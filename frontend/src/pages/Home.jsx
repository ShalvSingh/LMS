import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to SkillForge</h1>
        <p className="mt-2 text-gray-600">This is the home page placeholder.</p>
      </main>
    </div>
  )
}

export default Home

