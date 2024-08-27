import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container mx-auto mt-8 p-4">
    <h2 className="text-3xl font-bold mb-4">Find Your Dream Job</h2>
    <p className="mb-6">YourHR is here to help you find the perfect job based on your qualifications and preferences.</p>
    <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Sign Up Now
    </Link>
  </main>
);

export default Home;