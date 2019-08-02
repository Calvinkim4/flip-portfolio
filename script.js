document.querySelector('.div1').onclick = function pageFlip() {
    document.querySelector('.div1').classList.toggle('div-active');
    document.querySelector('.div1back').classList.toggle('div-active');
}

document.querySelector('.div1back').onclick = function pageFlip() {
    document.querySelector('.div1').classList.toggle('div-active');
    document.querySelector('.div1back').classList.toggle('div-active');
}

document.querySelector('.div2').onclick = function pageFlip() {
    document.querySelector('.div2').classList.toggle('div-active');
    document.querySelector('.div2back').classList.toggle('div-active');
}

document.querySelector('.div2back').onclick = function pageFlip() {
    document.querySelector('.div2').classList.toggle('div-active');
    document.querySelector('.div2back').classList.toggle('div-active');
}


document.querySelector('.div3').onclick = function pageFlip() {
    document.querySelector('.div3').classList.toggle('div-active');
    document.querySelector('.div3back').classList.toggle('div-active');
}

document.querySelector('.div3back').onclick = function pageFlip() {
    document.querySelector('.div3').classList.toggle('div-active');
    document.querySelector('.div3back').classList.toggle('div-active');
}


document.querySelector('.div4').onclick = function pageFlip() {
    document.querySelector('.div4').classList.toggle('div-active');
    document.querySelector('.div4back').classList.toggle('div-active');
}

document.querySelector('.div4back').onclick = function pageFlip() {
    document.querySelector('.div4').classList.toggle('div-active');
    document.querySelector('.div4back').classList.toggle('div-active');
}


// document.querySelector('.div5').onclick = function pageFlip() {
//     document.querySelector('.div5').classList.toggle('div-active');
// }

// document.querySelector('.indiv-container').onclick = function (event) {
//     event.stopPropagation();
// }

let projectLinks = document.getElementsByClassName("indiv-container");
for(let i = 0; i < projectLinks.length; i++)
{
   projectLinks[i].onclick = function(event) {
    event.stopPropagation();
   }
}

let cohortLinks = document.getElementsByClassName("profile");
for(let i = 0; i < cohortLinks.length; i++)
{
    cohortLinks[i].onclick = function(event) {
    event.stopPropagation();
   }
}

let webAppLinks = document.getElementsByClassName("webapp-links");
for(let i = 0; i < webAppLinks.length; i++)
{
    webAppLinks[i].onclick = function(event) {
    event.stopPropagation();
   }
}

var form = document.getElementsByTagName('form')[0];
   form.addEventListener('submit',contact,false);
   function contact(e) {
      e.preventDefault();

      var target = e.target;
      var message = '';

      // Loop Through All Input Fields
      for(let i = 0; i < target.length; ++i) {
         // Check to make sure it's a value. Don't need to include Buttons
         if(target[i].type != 'text' && target[i].type != 'textarea') {
                // Skip to next input since this one doesn't match our rules
            continue;
         }

         message +=target[i].value;
      }
      // Modify the hidden body input field that is required for the mailto: scheme
      target.elements["body"].value = message;

      // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
      this.submit();
   }