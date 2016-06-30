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
	dijit.byId('gauge_speedFAST').set('thresholdValue', max_speed);

	dijit.byId('gauge_speedQEP').set('maxValue', max_speed);
	dijit.byId('gauge_speedQEP').set('thresholdValue', max_speed);

	dijit.byId('sld_speedRef').set('maxValue', max_speed);
	//var labels = '0,' + (max_speed/2) + ',' + max_speed;
	//dijit.byId('lbl_debug').set('label', labels);
}