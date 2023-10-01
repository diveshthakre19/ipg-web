import React from "react";
function TitleTag(props) {
    return (
        <section id="page-title" class="bg-color page-title-dark py-6" style={{marginTop:25}}>
            <div class="container clearfix">
                <h1>{props.title}</h1>
                <span>{props.subTitle}</span>
            </div>
        </section>
    );
}
export default TitleTag;