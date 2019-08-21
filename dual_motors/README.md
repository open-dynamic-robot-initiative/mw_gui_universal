Universal Dual Motor GUI
========================

This GUI is for use with the InstaSPIN-MOTION labs using two motors and for
projects that are based on these labs.
It contains two types of elements:

 1. some universal controls (Motor On/Off-Buttons, instruments for current,
	velocity, etc.) which are always visible
 2. some more special controls (current reference, velocity reference, ...)
	which are organized in tabs and may only apply to some of the labs (e.g.
	the "velocity control" tab is only usefull for programs that use a velocity
	controller


How to use the GUI
------------------

The GUI is created with the GUI Composer plugin of Code Composer Studio.  To
run it, clone the repository to a subdirectory of
`ccs_workspace/.GUIComposerWS`.  Then you should be able to open it as a
project within the GUI Composer plugin.
