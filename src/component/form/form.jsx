import Script from 'next/script'
import React from "react";
import "./form.css"
const Form = () => {
	return <>
<div className="wFormContainer" style={{maxWidth: '90%', width: 'auto'}}>
  <div className="wFormHeader" />
  <div className><div className="wForm" id="3-WRPR" data-language="en_US" dir="ltr">
      <div className="codesection" id="code-3" />
      <form method="post" action="https://cleanslatez.tfaforms.net/api_v2/workflow/processor" className="hintsBelow labelsAbove" id={3} role="form">
        <div className="htmlSection" id="tfa_10"><div className="htmlContent" id="tfa_10-HTML"><p><font size={5}>Clean SlateZ offers financial assistance paying for medical debt for individuals that meet our established economic conditions. Before starting the application, let’s see if you meet the eligibility requirements.</font></p></div></div>
        <div className="htmlSection" id="tfa_11"><div className="htmlContent" id="tfa_11-HTML"><p><font size={5}>Please enter the information of the person who <span style={{fontSize: '14.4px'}}><b>owes</b></span><b>&nbsp;the medical debt below</b></font></p></div></div>
        <div id="tfa_4" className="section inline group">
          <div className="oneField field-container-D    " id="tfa_1-D">
            <label id="tfa_1-L" className="label preField reqMark" htmlFor="tfa_1">First Name</label><br /><div className="inputWrapper"><input aria-required="true" type="text" id="tfa_1" name="tfa_1" defaultValue title="First Name" className="required" /></div>
          </div>
          <div className="oneField field-container-D    " id="tfa_3-D">
            <label id="tfa_3-L" className="label preField reqMark" htmlFor="tfa_3">Last Name</label><br /><div className="inputWrapper"><input aria-required="true" type="text" id="tfa_3" name="tfa_3" defaultValue title="Last Name" className="required" /></div>
          </div>
        </div>
        <div id="tfa_9" className="section inline group">
          <div className="oneField field-container-D    " id="tfa_2-D">
            <label id="tfa_2-L" className="label preField reqMark" htmlFor="tfa_2">Email</label><br /><div className="inputWrapper"><input aria-required="true" type="text" id="tfa_2" name="tfa_2" defaultValue title="Email" className="validate-email required" /></div>
          </div>
          <div className="oneField field-container-D    " id="tfa_5-D">
            <label id="tfa_5-L" className="label preField reqMark" htmlFor="tfa_5">State of Residence</label><br /><div className="inputWrapper">
              <input aria-required="true" type="text" id="tfa_5" name="tfa_5" defaultValue title="State of Residence" data-dataset-allow-free-responses={0} data-dataset-clear-cache autoComplete="off" data-dataset-timestamp={1705173886} data-dataset-id="2fc6bc97-eb79-48a3-b9af-f85345d4cbf4" data-dataset-map data-dataset-type="csv" data-dataset-url="https://typeahead.formassembly.com" data-dataset-action="query.php" className="required wfAutosuggest" /><i className="fa fa-spinner fa-pulse fa-fw tt-spinner" /><i className="fa fa-search tt-search" aria-hidden="true" /><i className="fa fa-times-circle tt-clear no-input" tabIndex={0} aria-label="Clear field" />
            </div>
          </div>
        </div>
        <div className="oneField field-container-D    " id="tfa_17-D">
          <label id="tfa_17-L" className="label preField reqMark" htmlFor="tfa_17">Household Size</label><br /><div className="inputWrapper"><select aria-required="true" id="tfa_17" name="tfa_17" title="Household Size" className="calc-Household required"><option value>Please select...</option>
              <option value="tfa_18" id="tfa_18" className="calcval-30,120">1</option>
              <option value="tfa_19" id="tfa_19" className="calcval-40,880">2</option>
              <option value="tfa_20" id="tfa_20" className="calcval-51,640">3</option>
              <option value="tfa_21" id="tfa_21" className="calcval-62,400">4</option>
              <option value="tfa_22" id="tfa_22" className="calcval-73,160">5</option>
              <option value="tfa_23" id="tfa_23" className="calcval-83,920">6</option>
              <option value="tfa_24" id="tfa_24" className="calcval-94,680">7</option>
              <option value="tfa_25" id="tfa_25" className="calcval-105,440">8</option>
              <option value="tfa_26" id="tfa_26" className="calcval-116,200">9</option>
              <option value="tfa_27" id="tfa_27" className="calcval-126,960">10</option>
              <option value="tfa_28" id="tfa_28" className="calcval-137,720">11</option></select></div>
        </div>
        <div className="oneField field-container-D    " id="tfa_14-D">
          <label id="tfa_14-L" className="label preField reqMark" htmlFor="tfa_14">Annual Household Income?</label><br /><div className="inputWrapper"><input aria-required="true" type="text" id="tfa_14" name="tfa_14" defaultValue title="Annual Household Income?" className="validate-integer calc-Income required" /></div>
        </div>
        <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_33-D" role="radiogroup" aria-labelledby="tfa_33-L" data-tfa-labelledby="-L tfa_33-L">
          <label id="tfa_33-L" className="label preField reqMark" data-tfa-check-label-for="tfa_33">Currently Insured For Health?</label><div className="inputWrapper"><table id="tfa_33" className="choices columns2 required"><tbody><tr>
                  <td><span className="oneChoice"><input type="radio" defaultValue="tfa_34" className id="tfa_34" name="tfa_33" aria-required="true" aria-labelledby="tfa_34-L" data-tfa-labelledby="tfa_33-L tfa_34-L" data-tfa-parent-id="tfa_33" /><label className="label postField" id="tfa_34-L" htmlFor="tfa_34"><span className="input-radio-faux" />Yes</label></span></td>
                  <td><span className="oneChoice"><input type="radio" defaultValue="tfa_35" className id="tfa_35" name="tfa_33" aria-required="true" aria-labelledby="tfa_35-L" data-tfa-labelledby="tfa_33-L tfa_35-L" data-tfa-parent-id="tfa_33" /><label className="label postField" id="tfa_35-L" htmlFor="tfa_35"><span className="input-radio-faux" />No</label></span></td>
                </tr></tbody></table></div>
        </div>
        <div className="oneField field-container-D    " id="tfa_16-D">
          <label id="tfa_16-L" className="label preField reqMark" htmlFor="tfa_16">Total Medical Debt?</label><br /><div className="inputWrapper"><input aria-required="true" type="text" id="tfa_16" name="tfa_16" defaultValue title="Total Medical Debt?" className="required" /></div>
        </div>
        <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_29-D" role="radiogroup" aria-labelledby="tfa_29-L" data-tfa-labelledby="-L tfa_29-L">
          <label id="tfa_29-L" className="label preField reqMark" data-tfa-check-label-for="tfa_29">Received prior help from Clean SlateZ?</label><div className="inputWrapper"><span id="tfa_29" className="choices horizontal required"><span className="oneChoice"><input type="radio" defaultValue="tfa_30" className id="tfa_30" name="tfa_29" aria-required="true" aria-labelledby="tfa_30-L" data-tfa-labelledby="tfa_29-L tfa_30-L" data-tfa-parent-id="tfa_29" /><label className="label postField" id="tfa_30-L" htmlFor="tfa_30"><span className="input-radio-faux" />Yes</label></span><span className="oneChoice"><input type="radio" defaultValue="tfa_31" className id="tfa_31" name="tfa_29" aria-required="true" aria-labelledby="tfa_31-L" data-tfa-labelledby="tfa_29-L tfa_31-L" data-tfa-parent-id="tfa_29" /><label className="label postField" id="tfa_31-L" htmlFor="tfa_31"><span className="input-radio-faux" />No</label></span></span></div>
        </div>
        <div className="oneField field-container-D    " id="tfa_32-D">
          <label id="tfa_32-L" className="label preField " htmlFor="tfa_32">Referral Code</label><br /><div className="inputWrapper"><input type="text" id="tfa_32" name="tfa_32" defaultValue title="Referral Code" className /></div>
        </div>
        <div className="oneField field-container-D     wf-acl-hidden" id="tfa_36-D">
          <label id="tfa_36-L" className="label preField " htmlFor="tfa_36">Eligibility Submitted Date</label><br /><div className="inputWrapper"><input type="text" id="tfa_36" name="tfa_36" defaultValue title="Eligibility Submitted Date" className="validate-date" /></div>
        </div>
        <div className="actions" id="3-A" data-contentid="submit_button"><input type="submit" data-label="Submit" className="primaryAction" id="submit_button" defaultValue="Submit" /></div>
        <div style={{clear: 'both'}} />
        <input type="hidden" defaultValue={3} name="tfa_dbFormId" id="tfa_dbFormId" /><input type="hidden" defaultValue name="tfa_dbResponseId" id="tfa_dbResponseId" /><input type="hidden" defaultValue="556200e744f4a1403dac52c2e817634f" name="tfa_dbControl" id="tfa_dbControl" /><input type="hidden" defaultValue name="tfa_dbWorkflowSessionUuid" id="tfa_dbWorkflowSessionUuid" /><input type="hidden" defaultValue name="tfa_noOverWriteFields" id="tfa_noOverWriteFields" /><input type="hidden" defaultValue={72} name="tfa_dbVersionId" id="tfa_dbVersionId" /><input type="hidden" defaultValue name="tfa_switchedoff" id="tfa_switchedoff" />
      </form>
    </div></div><div className="wFormFooter"><p className="supportInfo"><a target="new" className="contactInfoLink" href="https://cleanslatez.tfaforms.net/forms/help/3" data-testid="contact-info-link" /><br /></p></div>
  <p className="supportInfo">
  </p>
</div>

	</>
};

export default Form;
