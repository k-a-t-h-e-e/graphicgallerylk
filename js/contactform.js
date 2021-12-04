
var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbyjQmVUOKkb71CPkx_fIjQcOoFIZASCSZt1BAYlI8NcQ6lhqncegGlnhx17YRGR6q4ZpA/exec'


$('#send-mail').on('click', function(e) {

  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $('form#contact-form').serializeObject()
  }).success(
    // do something
  );
})