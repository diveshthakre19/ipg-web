import React from "react";
function CenterPeragraph(props) {
    return (
        <>
            <section class="text-center px-md-5 mx-md-5 p-5 m-5 hoverEffect" style={{ border:1, borderColor: '#198754', borderStyle: 'solid' }}>
                <h3 class="font-weight-bold mb-4">{props.data.title}</h3>
                <p class="text-muted">{props.data.details}</p>
            </section>
        </>
    );
}
export default CenterPeragraph;