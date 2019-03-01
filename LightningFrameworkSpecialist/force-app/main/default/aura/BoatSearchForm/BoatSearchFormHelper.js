({
    getBoatTypeNames : function(component) {
        //Set Action Name on Aura Controller and its parameters
        var action = component.get('c.getBoatTypeNames');
        action.setCallback(this, function(response) {
            console.log(response)
            if(response.getState() === 'SUCCESS') {
                console.log('BURADASIN '+ 'Response is : %O' , response.getReturnValue());
				component.set("v.boatTypes", response.getReturnValue());
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
                title : 'Boat Search Form',
                message : error,
                type : 'error'
            }
            this.displayToast(opts)
        }.bind(this));
    }
})