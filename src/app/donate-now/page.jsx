import Script from 'next/script'

const DonateNow = () => {
	return (
		<div
			style={{
				position: "relative",
				overflow: "hidden",
				width: "100%",
				height: "100%",
			
			}}
		>
			<div data-widget-src='https://secure.givelively.org/donate/clean-slatez-inc?ref=sd_widget' id="give-lively-widget" class="gl-branded-donation-widget"></div>
			<Script id='clean-slatez'>
					{`
          gl=document.createElement('script');gl.src='https://secure.givelively.org/widgets/branded_donation/clean-slatez-inc.js';document.getElementsByTagName('head')[0].appendChild(gl);
        `}
				</Script>
		
			


		</div>
	);
};

export default DonateNow;
