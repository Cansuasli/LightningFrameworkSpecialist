({
    onInit : function(component) {
        //Set Action Name on Aura Controller and its parameters
        var action = component.get("c.getAll");
        var boat = component.get("v.boat");
        action.setParams({
                boatId : boat.Id
        });
        action.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                console.log("BURADASIN "+ "Response is : %O" , response.getReturnValue());
				component.set("v.boatReviews", response.getReturnValue());
            } else {
                //If error, use handleError method
                this.handleError(component);
            }
        });
        $A.enqueueAction(action);
	},
    handleError : function (component) {
        return $A.getCallback(function (error) {
            //Log error and display toast
            console.log(error);
            var opts = {
                title : "Boat Reviews",
                message : error,
                type : "error"
            }
            this.displayToast(opts)
        }.bind(this));
    }
})