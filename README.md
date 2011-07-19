## inline_edit

### Description

inline_edit is a small jquery plugin I came up with so I could allow users to add/edit values inline
in versatile way. inline_edit does pretty much all the work for you so
all you need to do (literally) is style it.

### Tutorial

#### How do I start without reading anything (much)?

In your awesome html you just wrote for your killer web app go ahead and make a div to house this 
editable thingy:

    <div id="crazy_value">
    </div>
    
Then do this in javascript to set the whole thing up:

    $('#crazy_value').inline_edit('Value', 140);
    
Wasn't that easy? You've just basically implemented what you'll find in the test.html file included so
refer to this if you are confused. 

#### Ok I've had a coffee and I have calmed down. What else can I do?

See how there are parameters in the inline_edit() call? They're not just for fun. In fact they are dead
serious. Basically the two args are as follows:

    name : The name of the value being edited. Used for the inital states 'Add <name>' link.
    max  : This sets the maximum character length of your editable value. Set it to 0 to make it unlimited.
    
#### Sweet! It looks like crap though...

Yeah I know. All the elements are classed so you can CSS them up nicely. Here's the deets:

    'Add <name>' : class='inline_add'
    Edit Box     : class='inline_box'
    Char Count   : class='inline_warning'
    Text Value   : class='inline_text'
    
If you want multiple inline_edit values and you want different styles for them then just nest rules
for these inside your parent div ('crazy_value' from above).
    
#### Wait a sec! How do I get the actual value?

Simples. Just do this on your div (we'll use the one from before):

    $('#crazy_value').children('#text_val').html();
    
### Questions? Problems

Either create an issue on the github repo (http://github.com/oetzi/inline_edit) or holla at me at oetzi101@gmail.com.




