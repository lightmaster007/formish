var current_page = 1;
var records_per_page = 1;



function prevPage()
{
    if (current_page > 1) {
        document.querySelector(`.q${current_page}`).setAttribute("hidden",true)
        current_page--;
        changePage(current_page);
    }
}

function nextPage(){

    next()
}

function next(){
    if (current_page < numPages()) {
        document.querySelector(`.q${current_page}`).setAttribute("hidden",true)
        current_page++;
        changePage(current_page);
    }
}



function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    let curr = document.querySelector(`.q${page}`);
    curr.removeAttribute("hidden");


    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }

    

}

function numPages()
{
    let pag = document.querySelector(".count");
    return (+pag.innerHTML)
}

window.onload = function() {
    changePage(1);
};

$("#clientDate").val(new Date()); 

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          prevPage();
          break;
       case 39:
          nextPage();
          break;
    }
 };


 function myFunction(n) {
    var popup = document.getElementById(`myPopup${n}`);
    popup.classList.toggle("show");
  }