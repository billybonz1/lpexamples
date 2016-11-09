"use strict";
$(document).ready(function() {
	
    $("#submit_btn").click(function() { 
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form input[required=true]").each(function(){
			 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).addClass('red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			else{ //if this field is empty 
				$(this).removeClass('red'); //change border color to red   
			}
				
		});
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = {
				'user_name'		: $('input[name=name]').val(), 
				'user_email'	: $('input[name=email]').val(),  
				'user_phone'	: $('input[name=phone]').val(),
				'user_message'	: $('input[name=message]').val()
			};
            
            //Ajax post data to server
            $.post('mail/contact-1.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
    
	$("#submit_btn-2").click(function() { 
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form-2 input[required=true]").each(function(){
			 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).addClass('red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			else{ //if this field is empty 
				$(this).removeClass('red'); //change border color to red   
			}
				
		});
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = {
				'user_email'	: $('input[name=email]').val()
			};
            
            //Ajax post data to server
            $.post('mail/contact-2.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
	
	$("#submit_btn-3").click(function() { 
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form-3 input[required=true]").each(function(){
			 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).addClass('red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			else{ //if this field is empty 
				$(this).removeClass('red'); //change border color to red   
			}
				
		});
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = { 
				'user_name'		: $('input[name=name]').val(), 
				'user_email'	: $('input[name=email]').val()
			};
            
            //Ajax post data to server
            $.post('mail/contact-3.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
	
	$("#submit_btn-4").click(function() { 
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form-4 input[required=true]").each(function(){
			 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).addClass('red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			else{ //if this field is empty 
				$(this).removeClass('red'); //change border color to red   
			}
				
		});
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = { 
				'user_fname'	: $('input[name=fname]').val(), 
				'user_lname'	: $('input[name=lame]').val(), 
				'user_email'	: $('input[name=email]').val(),
				'user_phone'	: $('input[name=phone]').val(),
				'user_country'	: $('input[name=country]').val(), 
				'user_package'	: $('input[name=package]').val()
			};
            
            //Ajax post data to server
            $.post('mail/contact-4.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
    
});
