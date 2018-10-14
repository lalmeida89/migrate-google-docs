console.log('hello world')
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kustomerapp.com/v1/customers",
  "method": "POST",
  "headers": {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYmY5Yzg5OWRlOTBiMDAzMzdhNDQ3ZSIsInVzZXIiOiI1YmJmOWM4OTBiZjBiYTAwMTFhMGU5ZGQiLCJvcmciOiI1YmJiZGIzMzMxZDdkNjAwMTE3YzAzNGYiLCJvcmdOYW1lIjoienp6LWx1aXotYSIsInVzZXJUeXBlIjoibWFjaGluZSIsInJvbGVzIjpbIm9yZyJdLCJleHAiOjE1Mzk4ODg5MDYsImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1YmJmOWM4OTBiZjBiYTAwMTFhMGU5ZGQifQ.w6gKTdxR4HHObDffmteKrBxHOaAjltdWSlLIIXrPdm4",
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"name\":\"Regan Luettgen\",\"emails\":[{\"email\":\"Anais36@fakehotmail.com\"}],\"phones\":[{\"type\":\"home\",\"phone\":\"1-458-555-5440 x78064\"},{\"type\":\"work\",\"phone\":\"1-525-555-9236\"}]}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
