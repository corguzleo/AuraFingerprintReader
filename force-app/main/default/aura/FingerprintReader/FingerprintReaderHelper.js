({
	changeBG : function(component,bdchange) {
        console.log('vars=',bdchange);
        var imgFinger = component.find('imgfinger');
        this.removeBG(component);
        $A.util.addClass(imgFinger, bdchange);
	},
    removeBG : function(component) {
        var imgFinger = component.find('imgfinger');
        $A.util.removeClass (imgFinger, 'bggray');
        $A.util.removeClass (imgFinger, 'bgred');
        $A.util.removeClass (imgFinger, 'bggreen');
        $A.util.removeClass (imgFinger, 'bgblue');
	}
})