$('.clear').hide(); 

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.upload-image img').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$(".file-input").change(function(){
    $('.upload-image').append('<img>');
    $('.upload-data').hide(); // From Stackoverflow answer
    $('.clear').show();
    readURL(this);
});

$(".clear").click(function(){
    $("img").remove();
    $(".clear").hide();
    $('.upload-data').show();
});



standardhtml = '';
standardhtml += '<div class="" style="display: block;">';
standardhtml += 'You can also provide a ';
standardhtml += '<a class="url_input">link from the web</a>';
standardhtml += '</div>';

$('.hyperlink_text').html(standardhtml);

$(".hyperlink_text a.url_input").click(function(){ 
	newhtml = '';
	newhtml += 'Link from the web ';
	newhtml += '<input class="form-control input-sm" placeholder="http://example.com/image.png" type="text">';
	newhtml += '<span class="separator"> | </span>';
	newhtml += '<a class="cancel" id="cancel">Cancel</a>';
	$('.hyperlink_text').html(newhtml);
});




$( "#hhyperlink_text" ).on( "click", "a.url_input", function() {
 alert( 'hello i am clicked' );
});