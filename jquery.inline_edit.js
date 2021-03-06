(function( $ ){
  $.fn.inline_edit = function(name, max, init) {
		var object = this;
		
		var val;
		if (init == null) val = "";
		else val = init;
		
		//Add add_link
		object.append('<div id="add_link"><a href="#" class="inline_add">Add ' + name + '</a></div>');
		
		//Add text_val
		object.append('<div id="text_val" class="inline_text">' + val + '</div>');
		
		//Add edit_box
		var warning = '';
		if (max > 0) {
			warning = '<span class="inline_warning"> ' + (max - val.length)+ '</span>';
		}
		
		object.append('<div id="edit_box"><input type="text" class="inline_box"/>' + warning + '</div>');
		
		//Set up DOM objects
		var add_link = object.children('#add_link');
		var text_val = object.children('#text_val');
		var edit_box = object.children('#edit_box');
		var standard_warning = edit_box.children('span').css('color');
		
		//Hide init
		edit_box.hide();
		if (init == null || init == "") text_val.hide();
		else add_link.hide();
		
		//Define val setter
		function set_val() {
			var val = edit_box.children('input').val();
			
			if (val.length <= max || max < 1) {
				edit_box.hide();
				text_val.text(val);
				edit_box.val(val);
				
				if (text_val.html() == "") {
					add_link.show()
				}
				
				else {
					text_val.show();
				}
			}
		}
		
		//Set add listener
		add_link.children('a').click(function() {
	    add_link.hide();
	    edit_box.children('input').val(text_val.html());
		  edit_box.show();
		  edit_box.children('input').focus();
	  });
	
		//Set close listeners
		edit_box.children('input').focusout(function() {
	    set_val();
	  });

	  edit_box.children('input').keyup(function(event){
	    if(event.keyCode == 13){
	      set_val();
	    }
	  });
	
		//Set typing listeners
		if (max > 0) {
			edit_box.children('input').bind('keyup', function() {
				var val = max - edit_box.children('input').val().length;
		    edit_box.children('span').html(' ' + val);
				text_val.text(edit_box.children('input').val());
	
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
		  edit_box.show();
		  edit_box.children('input').focus();
	  });
	
		return object;
	};
})( jQuery );