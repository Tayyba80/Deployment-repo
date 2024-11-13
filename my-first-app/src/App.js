// import './App.css';
// import Greeting from './Greeting'
// import Counter from './Counter'
// import WeatherComponent from './WeatherComponent'
// import ProductList from './productlist'

// function App() {
//   return (
//     <div className="App">
//       <Greeting name="Tayyba"/>
//       <Counter/>
//       <WeatherComponent/>
//       <ProductList/>
//     </div>
//   );
// }

// export default App;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const App = () => {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     // Make sure the backend server is running on port 5000
// //     axios.get('http://localhost:5000/')
// //       .then(response => {
// //         setData(response.data);
// //       })
// //       .catch(error => {
// //         console.error('There was an error fetching the data!', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Data from Backend:</h1>
// //       <p>{data ? data : 'Loading...'}</p>
// //     </div>
// //   );
// // };

// // export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Products from './productlist';
import Home from './home'; // Import Home component
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes for different pages */}
        <Route path="/" element={<Home />} />  {/* Default route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />  
      </Routes>
    </Router>
  );
}

export default App;
