
// scroll animations
const up = document.getElementById("up");
const down = document.getElementById("down");
const line = document.getElementById("line");
const grid = document.getElementById("grid");
const features = document.getElementById("cover");
const row1 = document.getElementById("row1");
const row1p = document.querySelectorAll("#row1 p");
const row2p = document.querySelectorAll("#row2 p");
const row2 = document.getElementById("row2");
const blank = document.getElementById("blank");
window.addEventListener("scroll",()=>{

     var textPos = up.getBoundingClientRect().top;
     if(textPos<750){
         up.classList.add("upanimate");
         down.classList.add("downanimate");
         line.classList.add("lineanimate");
     }
     else{
        up.classList.remove("upanimate");
        down.classList.remove("downanimate");
        line.classList.remove("lineanimate");
     }

     //animation for the image grid
     var gridPos = grid.getBoundingClientRect().top;
     if(gridPos<400){
        grid.classList.add("gridanimate");
     }else{
         grid.classList.remove("gridanimate");
     }

    

     const row1Pos = window.scrollY;
     const row2Pos = window.scrollY;

     
         
            if(row1Pos>2200)
                row1p[0].style.opacity="1";
            else
                row1p[0].style.opacity="0";
            if(row1Pos>2400)
                row1p[1].style.opacity="1";
            else
                row1p[1].style.opacity="0";
            if(row1Pos>2600)
                row1p[2].style.opacity="1";
            else
                row1p[2].style.opacity="0";

            if(row2Pos>2800)
                row2p[0].style.opacity="1";
            else
                row2p[0].style.opacity="0";
            if(row2Pos>3000)
                row2p[1].style.opacity="1";
            else
                row2p[1].style.opacity="0";
            if(row2Pos>3200)
                row2p[2].style.opacity="1";
            else
                row2p[2].style.opacity="0";
         
     if(row2Pos<3400){
         specs.style.position="sticky";
     }
     else{
         specs.style.position="static";
     }

     
})


// hamburger menu
const ham = document.querySelector(".fa-bars");
const nav = document.querySelector("header nav");
ham.addEventListener("click",()=>{
    if(nav.style.opacity=="1"){
        nav.style.opacity="0";
        ham.classList.remove("fa-times");
    }
    else{
        nav.style.opacity="1";
        ham.classList.add("fa-times");
    }
})