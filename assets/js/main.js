
/* javascript */


Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

$("form").submit(function(e){
  e.preventDefault();
  console.log("Probability your first choice is the car is 1/3")
  var value = $("input[type=radio][name=door]:checked").val();
  if (value=="door1") {
      var goatDoor =["imgdoor2", "imgdoor3"].sample();
      document.getElementById(goatDoor).src="goat.png";
      str = `
          <div class="alert alert-success" role="alert">
          Now you can change your answer to find the prize! Choose wisely!
          </div>
          `;

        $('.output').html(str);
      $("form").submit(function(e){
        if(goatDoor=="imgdoor2"){
          var array = ["imgdoor1", "imgdoor3"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
          if(carDoor == array[0]){
            array.shift();
          }else{
            array.pop();
          }
          document.getElementById(array[0]).src="goat.png";
          //console.log(carDoor);
          //console.log($("input[type=radio][name=door]:checked").val());
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }
        }
        else if(goatDoor=="imgdoor3"){
          var array = ["imgdoor1", "imgdoor2"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
            if(carDoor == array[0]){
              array.shift();
            }else{
              array.pop();
            }
          // console.log(array);
          document.getElementById(array[0]).src="goat.png";
          // console.log(carDoor);
          // console.log($("input[type=radio][name=door]:checked").val());
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }

        }
    });
  }
  if (value=="door2") {
      var goatDoor =["imgdoor1", "imgdoor3"].sample();
      document.getElementById(goatDoor).src="goat.png";
      str = `
          <div class="alert alert-success" role="alert">
          Now you can change your answer to find the prize! Choose wisely!
          </div>
          `;

        $('.output').html(str);
      $("form").submit(function(e){
        if(goatDoor=="imgdoor1"){
          var array = ["imgdoor2", "imgdoor3"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
          if(carDoor == array[0]){
            array.shift();
          }else{
            array.pop();
          }
          document.getElementById(array[0]).src="goat.png";
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }
        }
        else if(goatDoor=="imgdoor3"){
          var array = ["imgdoor1", "imgdoor2"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
          if(carDoor == array[0]){
            array.shift();
          }else{
            array.pop();
          }
          document.getElementById(array[0]).src="goat.png";
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }

        }
    });
  }
  if (value=="door3") {
      var goatDoor =["imgdoor1", "imgdoor2"].sample();
      document.getElementById(goatDoor).src="goat.png";
      str = `
          <div class="alert alert-success" role="alert">
          Now you can change your answer to find the prize! Choose wisely!
          </div>
          `;

        $('.output').html(str);
      $("form").submit(function(e){
        if(goatDoor=="imgdoor1"){
          var array = ["imgdoor2", "imgdoor3"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
          if(carDoor == array[0]){
            array.shift();
          }else{
            array.pop();
          }
          document.getElementById(array[0]).src="goat.png";
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }
        }
        else if(goatDoor=="imgdoor2"){
          var array = ["imgdoor1", "imgdoor3"];
          var carDoor =array.sample();
          document.getElementById(carDoor).src="car.png";
          if(carDoor == array[0]){
            array.shift();
          }else{
            array.pop();
          }
          document.getElementById(array[0]).src="goat.png";
          if(carDoor.includes($("input[type=radio][name=door]:checked").val())){
            outcome = `
                <div class="alert alert-success" role="alert">
                You win!
                </div>
                `;
            $('.output').html(outcome);
          }else{
            outcome = `
                <div class="alert alert-danger" role="alert">
                You lose!
                </div>
                `;
            $('.output').html(outcome);
          }

        }
    });
  }

console.log("Probability to get the car if you switch after 2nd choice is 2/3")
console.log("Douglas Deutsch & Kate Carnevale");

});
