$(document).ready(function(){
    // alert("Disclaimer: This is a clone. I do not own the rights to any of these assets. This is a ")
    document.getElementById("defaultOpen").click();

    
    window.onscroll = function() {stickyHeader()};

    var header = document.getElementById("rewards");

    var sticky = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    
    $('.accordions li .title').click(function(){
        $(this).toggleClass("opened");
        $(this).next(".accord-content").slideToggle();
      });
})

 function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    