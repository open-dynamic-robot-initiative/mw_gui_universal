/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * GUI Composer includes this JavaScript file by default within HTML pages authored in GUI Composer.
 */
require(["dojo/ready"], function(ready){
     ready(function(){
         // logic that requires that Dojo is fully initialized should go here
		 dijit.byId('chk_motorIdDone').watch('checked', function (prop, newValue, oldValue) {
			 var val = newValue ? 'Run Motor ID' : 'Run Motor';
			 dijit.byId('tgl_runMotor').set('label', val);
		 });
		 
		 
		 

		 
		 

		 // setup all speed instruments to given max. speed.
		 changeMaxSpeed();
     });
});

		 
function changeMaxSpeed() {
	var max_speed = dijit.byId('nsp_maxSpeed').get('value');
	
	dijit.byId('gauge_speedFAST').set('maxValue', max_speed);
	dijit.byId('gauge_speedFAST').set('minValue', -max_speed);
	dijit.byId('gauge_speedFAST').set('thresholdValue', max_speed);

	dijit.byId('gauge_speedQEP').set('maxValue', max_speed);
	dijit.byId('gauge_speedQEP').set('minValue', -max_speed);
	dijit.byId('gauge_speedQEP').set('thresholdValue', max_speed);

	dijit.byId('sld_speedRef').set('maximum', max_speed);
	//var labels = '0,' + (max_speed/2) + ',' + max_speed;
	//dijit.byId('lbl_debug').set('label', labels);
}

function mrevToDegree(valueFromTarget) {
	return valueFromTarget * 360;
}

function convertEstStateToString(state)
{
	/*
	 * from MW/sw/modules/est/src/est_states.h
	 * 
	  typedef enum
		{
		  EST_State_Error=0,            //!< error
		  EST_State_Idle,               //!< idle
		  EST_State_RoverL,             //!< R/L estimation
		  EST_State_Rs,                 //!< Rs estimation state
		  EST_State_RampUp,             //!< ramp up the speed
		#if !defined(FAST_ROM_V1p6) && !defined(FAST_ROM_V1p7)
		  EST_State_ConstSpeed,         //!< constant speed after ramp up
		#endif
		  EST_State_IdRated,            //!< control Id and estimate the rated flux
		  EST_State_RatedFlux_OL,       //!< estimate the open loop rated flux
		  EST_State_RatedFlux,          //!< estimate the rated flux 
		  EST_State_RampDown,           //!< ramp down the speed 
		  EST_State_LockRotor,          //!< lock the rotor
		  EST_State_Ls,                 //!< stator inductance estimation state
		  EST_State_Rr,                 //!< rotor resistance estimation state
		  EST_State_MotorIdentified,    //!< motor identified state
		  EST_State_OnLine,             //!< online parameter estimation
		  EST_numStates                 //!< the number of estimator states
		} EST_State_e;
		
		NOTE: Assume the #if is false
	 */
	
	const state_names = [
		  "EST_State_Error",
		  "EST_State_Idle",
		  "EST_State_RoverL",
		  "EST_State_Rs",
		  "EST_State_RampUp",
		  "EST_State_IdRated",
		  "EST_State_RatedFlux_OL",
		  "EST_State_RatedFlux",
		  "EST_State_RampDown",
		  "EST_State_LockRotor",
		  "EST_State_Ls",
		  "EST_State_Rr",
		  "EST_State_MotorIdentified",
		  "EST_State_OnLine",
		  "EST_numStates"
		  ];
	
	return state_names[state];
}

function validateNumber(value) {
	return isNaN(value) ? 0 : value;
}

function validateVirtualSpringStiffness(value) {
	if (isNaN(value) || value < 0)
		return 0;
	else
		return value;
}

function onChangeVirtualSpringMode() {
	const is_vs_on = dijit.byId("tgl_virtualSpringMode").get("checked");
	
	dijit.byId("sld_IqRef").set("disabled", is_vs_on);
}
