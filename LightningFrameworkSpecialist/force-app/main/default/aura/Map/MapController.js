({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlatMapMarker : function(component, event, helper){
        //Get lant, long
        var lat = event.getParam("lat");
        var lat = event.getParam("long");
        //Set lat and long to the location sObject attribute
        component.set("v.location", {
            lat : lat,
            long : long
        });
    }
})