'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SP816 extends ZwaveDevice {
	
	async onMeshInit() {

		//this.enableDebug();
		
		//this.printNode();

		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_motion', 'NOTIFICATION');
		this.registerCapability('alarm_tamper', 'NOTIFICATION');
		
	}
}
module.exports = SP816;