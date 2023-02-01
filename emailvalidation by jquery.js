//registration email and passwoed check
$(document).ready(function(){
	//alert("hello");
	var response = '';
   $('#submitbutton').prop('disabled', true); 
	$('#password').keyup(function(){
		
		//var name= $('#name').val();
		var email= $('#email').val();
		var password = $('#password').val();
		
		$.ajax({
		url: "/checkEmailUser",
		dataType: "json",
		type: "POST",
		data: { email: email, password: password},
		    success: function (data) { 
			if(data.Status=="true")
			{
				  $('#passwordchecker').hide();
				  if(($('#name').val().length>0 )&& ($('#id').val().length>0))
				     $('#submitbutton').prop('disabled', false); 
			}
			else
			{
				 $('#passwordchecker').show();
				   $('#submitbutton').prop('disabled', true); 
				   //console.log(data.Status);
			}
			},
			error: function (data) {
			console.log(data);
			}
		});
		});
		  
		        
				  
		  $('#name').keyup(function(){
			
			if($('#name').val().length>0)
				  {
					//console.log("ok");
					if(($('#email').val().length>0 )&& ($('#password').val().length>0)&&($('#id').val().length>0) && !($("#passwordchecker").is(":visible")))
				     $('#submitbutton').prop('disabled', false); 
				  }
				  else
				  {
				  $('#submitbutton').prop('disabled', true); 
					//console.log("notok");
				  }
		});
		
		 $('#id').keyup(function(){
			
			if($('#id').val().length>0)
				  {
					//console.log("ok");
					if(($('#email').val().length>0 )&& ($('#password').val().length>0)&&($('#name').val().length>0)&& !($("#passwordchecker").is(":visible")))
				     $('#submitbutton').prop('disabled', false); 
				  }
				  else
				  {
				  $('#submitbutton').prop('disabled', true); 
					//console.log("notok");
				  }
		});
			
});
