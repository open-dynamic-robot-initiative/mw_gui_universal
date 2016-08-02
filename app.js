/*
 * AMD Universal Dual Motor GUI
 * 
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * GUI Composer includes this JavaScript file by default within HTML pages authored in GUI Composer.
 */
require(["dojo/ready"], function(ready){
     ready(function(){
         // logic that requires that Dojo is fully initialized should go here

     });
});


//! Set the value of the element to '0'.
//! Element is given by its ID.
function setZero(elementId)
{
	dijit.byId(elementId).set("value", 0);
}

//! Convert mrev value to degree.
function mrevToDegree(valueFromTarget) {
	return (valueFromTarget * 360).toFixed(2);
}

//! make sure spring stiffnes value is a positive number.
function validateVirtualSpringStiffness(value)
{
	if (isNaN(value) || value < 0)
		return 0;
	else
		return value;
}

function onAlignMotor1PropertyChanged( propertyName, newValue, oldValue) {
	dijit.byId("lbl_alignMotor1").set("label",
			($TI.GUIVars.getValue("alignMotor1") ? "Aligning..." : "Ready!"));
}

function onAlignMotor2PropertyChanged( propertyName, newValue, oldValue) {
	dijit.byId("lbl_alignMotor2").set("label",
			($TI.GUIVars.getValue("alignMotor2") ? "Aligning..." : "Ready!"));
}
