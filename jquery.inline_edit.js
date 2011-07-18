(function( $ ){
  $.fn.inline_edit = function(name, max) {
		var object = this;
		
		//Add add_link
		object.append('<div id="add_link"><a href="#" class="inline_add">Add ' + name + '</a></div>');
		
		//Add text_val
		object.append('<div id="text_val" class="inline_text"></div>');
		
		//Add edit_box
		var warning = '';
		if (max > 0) {
			warning = '<span class="inline_warning"> ' + max + '</span>';
		}
		
		object.append('<div id="edit_box"><input type="text" class="inline_box"/>' + warning + '</div>');
		
		//Set up DOM objects
		var add_link = object.children('#add_link');
		var text_val = object.children('#text_val');
		var edit_box = object.children('#edit_box');
		var standard_warning = edit_box.children('span').css('color');
		
		//Hide init
		edit_box.hide();
		text_val.hide();
		
		//Define val setter
		function set_val() {
			var val = edit_box.children('input').val();
			
			if (val.length <= max || max < 1) {
				edit_box.hide();
				text_val.html(val);
				
				if (text_val.html() == "") {
					add_link.show()
				}
				
				else {
					text_val.show();
				}
			}
		}
		
		//Set add listener
		add_link.click(function() {
	    add_link.hide();
	    edit_box.val(text_val.html());
		  edit_box.show();
		  edit_box.focus();
	  });
	
		//Set close listeners
		edit_box.focusout(function() {
	    set_val();
	  });

	  edit_box.keyup(function(event){
	    if(event.keyCode == 13){
	      set_val();
	    }
	  });
	
		//Set typing listeners
		if (max > 0) {
			edit_box.bind('keyup', function() {
				var val = max - edit_box.children('input').val().length;
		    edit_box.children('span').html(' ' + val);
	
				if (val < 0) {
					edit_box.children('span').css('color', 'red');
				}
			
				else {
					edit_box.children('span').css('color', standard_warning);
				}
		  });
		}
	
		//Set re-edit listener
		text_val.click(function() {
	    text_val.hide();
	    edit_box.val(text_val.html());
		  edit_box.show();
		  edit_box.focus();
	  });
	
		return object;
	};
})( jQuery );