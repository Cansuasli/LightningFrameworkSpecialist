({
    doInit : function(component, event, helper){
		component.set('v.renderNewButton', $A.get('e.force:createRecord'));
        helper.loadBoatTypes(component);
    }
  
})