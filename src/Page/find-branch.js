import React, { useState, useEffect } from 'react';
import BranchList from "../branchlist";
import TitleTag from '../ui-components/title-tag';
import { Link } from "react-router-dom";
import MemberCard from '../ui-components/member-card';
function FindBranch() {
  // the value of the search field 
  const [name, setName] = useState('');
  // the search result
  const [foundUsers, setFoundUsers] = useState([]);
  const [list, setlist] = useState([]);
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
        setlist(responseData.data);
        setFoundUsers(responseData.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

  }, []);
  const filter = (e) => {

    const keyword = e.target.value;

    if (keyword !== '') {
      const results = foundUsers.filter((user) => {
        return user.Location.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(list);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };
  return (
    <>
      <TitleTag title="Find" subTitle="Find Branch Name city" />
      <div className="container mt-5">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search City"
        />

        <div className="user-list row">
          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user) => (
              <div key={user.id} className="user col-md-6">
                <span className="user-id"><img src='https://indianpackersgroup.com/ipg-logo.png' style={{height:40,width:40}} /></span>
                <span className="user-companyName"><Link to={"/packers-and-movers-" + user.Location + "-" + user.BranchCode}>Indian Packers Group <strong style={{color:'green'}}>{user.Location}</strong></Link></span>
                <span className="user-mobileNumber">
                  <a className="btn btn-success" href={`https://wa.me/91${user.WhatsappNumber}?text=Welcome to IPG - Indian Packers Group! Your trusted partner for all your packing and moving needs. We're here to make your relocation experience smooth and hassle-free.`} ><i className="fa fa-whatsapp text-white"></i></a>
                </span>
              </div>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default FindBranch;