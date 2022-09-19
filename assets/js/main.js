
/* javascript */

//$("h1").hide();

let username ="";

$(".submit").click(function(e){
  e.preventDefault();
  username=$(".username").val();
  console.log("username is " + username);
});
