function popup() {
    var btn = document.getElementById("kabinet").innerHTML;
    if(btn == "ЛИЧНЫЙ КАБИНЕТ"){
        document.querySelector(".popup").style.display ="flex";
        document.body.style.overflow = "hidden";
    }
    else {
        logout();
    }
    
}
function close_popup() {
    document.querySelector(".popup").style.display ="none";
    document.body.style.overflow = "scroll";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}
function login(name){
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("user_name").style.display = "inline";
    document.querySelector(".popup").style.display ="flex";
    close_popup();
}
function logout(){
    document.getElementById("user_name").style.display = "none";
}

    
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,  
    autoplay: {
        delay: 700,
        disableOnInteraction: false,
    },
});

function big (element){
    element.style.fontsize ="30px";
}
function small(element){
    element.style.fontsize ="20px";
}


// function initMap() {
//     var options = {
//     center: { lat: 43.238949,  lng:76.889709 },
//     zoom: 11
// }
    
// var map = new google.maps.Map(document.getElementById("map"),options);
    
// var icon = {
//         url:"https://st2.depositphotos.com/5266903/8119/v/950/depositphotos_81198408-stock-illustration-store-flat-red-color-rounded.jpg",
//         scaledSize: new google.maps.Size(50,50),
//         origin: new google.maps.Point(0,0),
//         anchor: new google.maps.Point(0,0)
// }
// var marker = new google.maps.Marker({
//         position: { lat:43.28711202638869, lng:76.89024467021004},
//         map: map,
//         icon: icon
// })
$(document).ready(function(){
    $(".fas").click(function(){
      $(".nav-bar").slideToggle("slow");
    });
  });
