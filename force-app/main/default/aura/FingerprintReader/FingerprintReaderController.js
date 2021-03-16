({
    init: function(component, event, helper) {
        
		window.addEventListener('keydown', function(e) {
          if (e.key === 'R') { 
            component.set('v.bgColor', 'bgred');
//            helper.changeBG(component,'bgred');
          }
          if (e.key === 'V') { 
            component.set('v.bgColor', 'bggreen');
            //helper.changeBG(component,'bggreen');
          }
          if (e.key === 'A') { 
            component.set('v.bgColor', 'bgblue');
            //helper.changeBG(component,'bgblue');
          }
          if (e.key === 'G') { 
            component.set('v.bgColor', 'bggray');
            //helper.changeBG(component,'bggray');
          }
		});
 	},
	handleReadClick : function(component, event, helper) {
        console.log("handleReadClick init");
		helper.changeBG(component,'bgblue');
        var bgColor = component.get('v.bgColor');
		
        if (component.get('v.isProgressing')) {
            // stop
            component.set('v.isProgressing', false);
            clearInterval(component._interval);
            helper.changeBG(component,'bggray');
            component.set('v.progress', 0);
        } else {
            // start
            component.set('v.isProgressing', true);
            component._interval = setInterval($A.getCallback(function () {
                var progress = component.get('v.progress');
                component.set('v.progress', progress === 100 ? 0 : progress + 1);
                if(progress === 100 ){
                    // stop
                    component.set('v.isProgressing', false);
                    clearInterval(component._interval);
                    helper.changeBG(component,bgColor);
                }
            }), 50);
        }
        
        
        console.log("handleReadClick finish");
	}
})