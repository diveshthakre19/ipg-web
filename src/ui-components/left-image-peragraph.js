import React from "react";
function LeftImagePeragraph(props) {
    return (
        <>
          <section id="content" className='p-5'>
        <div class="container">
            <div class="row">
                <div class="col-md-5 mb-4">
                    <div class="view">
                        <img src={props.data.image} class="img-fluid" alt={props.data.title} />
                    </div>
                </div>
                <div class="col-md-7  d-flex align-items-center">
                    <div>
                        <h3 class="mb-4">{props.data.title}</h3>
                        <p className='perGraph'>{props.data.details}</p>
                        <a href={props.data.buttonUrl} class="btn btn-success">{props.data.buttonName}</a>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </>
    );
}
export default LeftImagePeragraph;