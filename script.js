let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

if (windowWidth >= 1000) {
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
} else {
    // document.querySelector('.div1').onclick = function pageFlip() {
    //     document.querySelector('.div1').classList.toggle('div-active-mobile');
    //     document.querySelector('.div1back').classList.toggle('div-active-mobile');
    // }

    // document.querySelector('.div1back').onclick = function pageFlip() {
    //     document.querySelector('.div1').classList.toggle('div-active-mobile');
    //     document.querySelector('.div1back').classList.toggle('div-active-mobile');
    // }

    // document.querySelector('.div2').onclick = function pageFlip() {
    //     document.querySelector('.div2').classList.toggle('div-active-mobile');
    //     document.querySelector('.div2back').classList.toggle('div-active-mobile');
    // }

    // document.querySelector('.div2back').onclick = function pageFlip() {
    //     document.querySelector('.div2').classList.toggle('div-active-mobile');
    //     document.querySelector('.div2back').classList.toggle('div-active-mobile');
    // }


    // document.querySelector('.div3').onclick = function pageFlip() {
    //     document.querySelector('.div3').classList.toggle('div-active-mobile');
    //     document.querySelector('.div3back').classList.toggle('div-active-mobile');
    // }

    // document.querySelector('.div3back').onclick = function pageFlip() {
    //     document.querySelector('.div3').classList.toggle('div-active-mobile');
    //     document.querySelector('.div3back').classList.toggle('div-active-mobile');
    // }


    // document.querySelector('.div4').onclick = function pageFlip() {
    //     document.querySelector('.div4').classList.toggle('div-active-mobile');
    //     document.querySelector('.div4back').classList.toggle('div-active-mobile');
    // }

    // document.querySelector('.div4back').onclick = function pageFlip() {
    //     document.querySelector('.div4').classList.toggle('div-active-mobile');
    //     document.querySelector('.div4back').classList.toggle('div-active-mobile');
    // }

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
}


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

