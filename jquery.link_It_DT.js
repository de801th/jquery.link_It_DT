/*Name: LinkIt
 *Author: Denis Thibeault
 *Version:0.1.0
 *License: MIT
 */
 
 (function($){
	$.fn.linkIt = function(options){
		//The alert below unrem will show what is in between the span tags 
		//alert(this.html());
		//Default Settings
		var settings = $.extend({
		//the variable whatever below unrem will be displayed 'something'
		//whatever : 'something'
		//To have the user enter the value to the variable whatever
		//make the the value equal null and add the whatever varable in the index.html
		//whatever: null
		// you can set 3 things the user can define
		href	:null,
		text	:null,
		target	:'_self'
		
		}, options);
		//to access settings variable using options function on options
		//the word 'something' that is assign to the variable whatever 
		//will be displayed.
		//To have the user enter the value to the variable whatever
		//make the the value equal null
		//alert(settings.whatever);
		//Validate settings
		if(settings.href == null){
			console.log('You need an href option for LinkIt to work');
		}
		return this.each(function(){
			var object = $(this);
			if(settings.text == null){
				settings.text = object.text();
			}
			//Wrap Method
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);

		});
		
	}
 }(jQuery));