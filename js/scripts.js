// Form Submission
$(document).ready(function(){
  $('button:contains("Submit")').click(function(){
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $('#donor-form form').serialize(),
      success: function(){
        alert('Sent! Thanks :)');
        $('button.close').click();},
      error: function() {
        alert('Didn\'t work :(');}
    });
  });
});
