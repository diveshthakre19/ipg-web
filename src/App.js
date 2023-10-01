import './App.css';
import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import globalData from './globalData'
import { Routes, Route } from "react-router-dom";
import Header from './ui-components/header';
import Footer from './ui-components/footer';
import Home from './Page/home';
import AboutUs from './Page/about-us';
import Services from './Page/service';
import Branch from './Page/branch';
import Faqs from './Page/faqs';
import ContactUs from './Page/contact-us';
import Gallery from './Page/gallery';
import HomeShifting from './Page/home-shifting';
import OfficeMoving from './Page/office-moving';
import InternationalMoving from './Page/international-moving';
import CarRelocationService from './Page/car-relocation-service';
import PackersMovers from './Page/packers-movers';
import PackingAndUnpacking from './Page/packing-and-unpacking';
import Transportation from './Page/transportation';
import BranchList from "./branchlist";
import FindBranch from './Page/find-branch';
import CalculateRate from './Page/calculate-rate';
function App() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const apiUrl = 'https://admin.indianpackersgroup.com/api-lpg/api.php';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((responseData) => {
              console.log(responseData.data);
              setData(responseData.data);
              setLoading(false);
            })
            .catch((err) => {
              setError(err);
              setLoading(false);
            });

    }, []);
  return (
    <div id="wrapper" className="clearfix">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Branches" element={<Branch />} />
        <Route path="/find-Branches" element={<FindBranch />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/calculate-rate" element={<CalculateRate />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services/home-moving' element={<HomeShifting />} />
        <Route path='/services/office-moving' element={<OfficeMoving />} />
        <Route path='/services/packing-and-unpacking' element={<PackingAndUnpacking />} />
        <Route path='/services/international-moving' element={<InternationalMoving />} />
        <Route path='/services/car-and-bike-relocation' element={<CarRelocationService />} />
        <Route path='/services/transportation' element={<Transportation />} />

        {data.map(list=>
            <Route path={`packers-and-movers-${list.Location}-${list.BranchCode}`} element={<PackersMovers code={list.id} />} />
          )}
      </Routes>
      <Footer />

      {/* <FloatingWhatsApp avatar={globalData.companydetails.logo} phoneNumber={`91${globalData.companydetails.contactNumber}`} accountName="Indian Packers Group" /> */}
    </div>
  );
}
export default App;
