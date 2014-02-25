module.exports = function(bmo) {
	function ping(responder) {
		responder("Pong");
	}

	function uptime(responder) {
		responder("BMO has been running for " + process.uptime() + "s");
	}

	bmo.plugin.register("system", {
		ping: ping,
		uptime: uptime
	});

	bmo.plugin.register("ping", ping);
	bmo.plugin.register("uptime", uptime);
};
