/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["gabrieldev/invoices/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
