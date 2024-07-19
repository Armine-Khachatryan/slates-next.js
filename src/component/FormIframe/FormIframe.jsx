"use client"
import React, { useEffect } from "react";
import "./form.css"
const FormIframe = () => {
  useEffect(()=>{
    fetch('https://cleanslatez.tfaforms.net/rest/forms/view/3')
	.then(response => response.json())
	.then(data => console.log("miban",data))
	.catch(err => console.error(err));
  })
	return <div style={{position:"relative"}}>
 <iframe className='form-iframe' src="http://cleanslatez.tfaforms.net/3" />


	</div>
};

export default FormIframe;
