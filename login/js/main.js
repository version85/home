// JavaScript Document
$(document).ready(function() {
	$("#check-enable-button").on("change",function(){$("#check-enable-button").is(":checked")?$("#enablebutton").attr("disabled",!1).removeClass("disabled-view"):$("#enablebutton").attr("disabled",!0).addClass("disabled-view")})
  $("#j-forms").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
	   mobile : {
        required: true,
		number: true,
		minlength:10,
        maxlength: 10,		
      },
	   password : {
        required: true,
		minlength:6,
        maxlength: 12,		
      },
	  confirm_password : {
        required: true,
		minlength:6,
        maxlength: 12,
		equalTo: password,		
      },
	   fullname: {
        required: true,
        minlength: 3,
		maxlength: 35,
      },
	  gender: {
		 required: true,
	  },
	  date: {
		 required: true,
	  },
	  month: {
		 required: true,
	  },
	  year: {
		 required: true,
	  },
	   phone: {
		 number: true,
	  },
	  state: {
		 required: true,
	  },
	  city: {
		 required: true,
		 minlength: 3,
		 maxlength: 40,
	  },
	  zipcode: {
		 required: true,
		 number: true,
		 minlength: 6,
		 maxlength: 6,
	  },
	  address: {
		 required: true,
		 minlength: 15,
		 maxlength: 250,
	  },
	  captchacode: {
		 required: true,
		 number: true,
	  },
    },
    messages : {
      email: {
        email: "Type proper Email"
      },
	  mobile: {
        mobile: "Mobile number 10 digits",number:"Only digits allowed"
      },
	  password: {
      minlength:"At least 6 characters",maxlength:"Not more than 12 characters"
      },
	  confirm_password: {
      minlength:"At least 6 characters",maxlength:"Not more than 12 characters",equalTo:"Mismatched passwords"
      },
	  phone: {
      number:"Only digits allowed",
      },
	  city: {
      minlength:"At least 3 characters",maxlength:"Not more than 20 characters"
      },
	  zipcode: {
      minlength:"6 digits required",maxlength:"6 digits required",number:"Only digits allowed"
      },
	  address: {
      minlength:"minimum 15 characters",maxlength:"maximum 250 characters"
      },
	  
    }
  });
});



$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

$(document).on('click', '.toggle-password1', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#confirm_password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

function AvoidSpace(event) {

    var k = event ? event.which : window.event.keyCode;

    if (k == 32) return false;

}
$(document).ready(function() {
  $('input[rel="txtTooltip"]').tooltip();
});

$(function() { // Handler for .ready() called.
            $('#reload').click(function(){
				$(this).addClass('fa fa-spinner fa-spin');
				setTimeout(function(){$(reload).removeClass('fa fa-spinner fa-spin');}, 1000);
				setTimeout(function(){$(reload).addClass('fa fa-refresh');}, 1000);
                $('#captcha').attr('src', 'captcha.php?' + (new Date).getTime());
				
				
            });
        });




   $(document).ready(function() {
    $("#j-forms").submit(function(e){
        e.preventDefault();
			var form = $("form#j-forms");

			if (form.valid()) {

		email=$("#email").val();
        mobile=$("#mobile").val();
		password=$("#password").val();
		confirm_password=$("#confirm_password").val();
		fullname=$("#fullname").val();
		gender=$("#gender").val();
		date=$("#date").val();
		month=$("#month").val();
		year=$("#year").val();
		phone=$("#phone").val();
		state=$("#state").val();
		city=$("#city").val();
		zipcode=$("#zipcode").val();
		address=$("#address").val();
		captchacode=$("#captchacode").val();

        $('#loading').show();
		$('#registerresponse').hide();
		
                    

        $.ajax({
				
                type: "POST",
               url: "registerdata.php",
				data: {email: email ,mobile:mobile,password:password,confirm_password:confirm_password,fullname:fullname,gender:gender,date:date,month:month,year:year,phone:phone,state:state,city:city,zipcode:zipcode,address:address,captchacode:captchacode }, 
                success:function(result){
                   if(result === "redirect"){

                    }
                    else{
                        $("#registerresponse").html(result).fadeIn('100');
						$('#loading').hide();
						
                    }
                    }
            })
  }  
  });
});
