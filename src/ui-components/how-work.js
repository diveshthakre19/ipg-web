import React from "react";
function HowWork(props) {
    const data=[{
        title:"Tell Us About Your Move",
        details:"hare your move details. Where are you moving to? When and what?",
        image:"img/work/submit.png",
    }]
    return (
        <>
            <section id="how" class="how">
                <div class="container">
                    <div class="section-title">
                        <h2 class="text-center">How it works?</h2>
                    </div>
                    <div class="row">
                        {data.map(data=>
                              <div class="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                              <div className="align-items-center">
                                  <img src={data.image} alt={data.title} title={data.title} style={{height:60,width:60,verticalAlign:'middle'}} class="icon-size" />
                                      <h4 class="text-center">{data.title}</h4>
                                      <p class="text-center">{data.details}</p>
                              </div>
                          </div>
                            )}
                      
                    </div>

                </div>
            </section>
        </>
    );
}
export default HowWork;