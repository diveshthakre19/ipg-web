import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function BranchListDev() {
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
        <>
            <div class="line-1"></div>
            <section id="content" className='p-5'>
                <div className='container'>
                    <h3 class="nott mb-3 fw-semibold ls0">All India packers group Branches</h3>
                    <div className='row'>
                        {loading ? (
                            <p>Branches Loading...</p>
                        ) : error ? (
                            <p>Error: {error.message}</p>
                        ) : (
                            <>
                                {data.map((item, index) => (
                                    <div className='col-md-3 col-6 p-2'>
                                        <Link to={"/packers-and-movers-" + item.Location + "-" + item.BranchCode}>
                                            <div className='roundShap'>
                                                Packers And Movers {item.Location} IPG{item.BranchCode}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
export default BranchListDev;