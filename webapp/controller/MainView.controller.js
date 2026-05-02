sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("gabrieldev.invoices.controller.MainView", {
        onInit() {

            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreen");            

        },
        onFilter: function (oEvent) {

        },

        onClearFilter() {
            const oModelSelScreen = this.getView().getModel("selectionScreen");
            oModelSelScreen.setProperty("/ShipName", "");
            oModelSelScreen.setProperty("/CountryKey", "");

        }

    });
});