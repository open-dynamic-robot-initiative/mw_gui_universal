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

//! Convert EST state value to its string representation.
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