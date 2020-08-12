function showdiv(Div_id) {
    if (false == $(Div_id).is(':visible')) {
        $(Div_id).show(250);
    }
    else {
        $(Div_id).hide(250);
    }
}
$(function() {
    $(".rectanglewrap").click(function() {
      $("#imagepopup").toggle(250);
    });
  });