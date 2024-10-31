// PopupThis - the Simplest utility to generate your content popups
//=================================================================

var dc;
(function(p){
	dc = 
	{
		init: function()
		{
			var autoDimensions, customWidth, customHeight;
			p('.popupthis').each(function(){
				autoDimensions = ( p(this).data('auto-dimensions') ) ? false : true;
				customWidth = ( p(this).data('custom-width') )? p(this).data('custom-width') : 'auto';
				customHeight = ( p(this).data('custom-height') )? p(this).data('custom-height') : 'auto';
				p(this).fancybox({
			    	width : customWidth,
			    	height : customHeight,
			    	autoDimensions: autoDimensions
				});
			});
		}
	}

})(jQuery); 
	
jQuery(document).ready(function(){
	dc.init();
});