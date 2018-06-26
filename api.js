function lookup(method,username,registration,callback)
{
  $.ajax({
      type: 'GET',
      url: 'https://www.regcheck.org.uk/api/reg.asmx/' + method + '?RegistrationNumber=' + registration + '&username=' + username,
      success : function(data) {
        callback(JSON.parse($(data).find("vehicleJson").text()));
      }
  });
}
