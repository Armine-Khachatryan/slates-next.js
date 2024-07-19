import Header from '../../../component/Header'
import ShortTermHeaderWrap from '../../../component/ShortTermHeaderWrap'
import React from 'react'
import Form from "../../../component/form/form"
import classes from "../Volunteer.module.css"
import FormIframe from "../../../component/FormIframe/FormIframe"
const ShortTerm = () => {
	return (
		<>
		<header className={classes.smallScreens}>
				<div className={classes.headerDiv}>
					<Header />
				</div>
		</header>
		<section className={"container"} style={{marginBottom:"50px"}}>
			{/* <Form /> */}
			<FormIframe/>
                    {/*<ApplicationShortTerm2/>*/}
    </section>
		</>
	)
}

export default ShortTerm