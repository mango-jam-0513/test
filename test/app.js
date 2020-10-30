
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

function imagefun() {
  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("./Assets/computer2.jpg")) {
      Image_Id.src = "./Assets/computer2b.jpg";
  }
  else {
      Image_Id.src = "./Assets/computer2.jpg";
  }
}  

var toggleMove = true;
var myImage = document.querySelector("#myImage");
var myDesc = document.querySelector("#myDesc");
var movementContainer = document.querySelector("#movement-container");
var pos = movementContainer.getBoundingClientRect();
var posOfImage = myImage.getBoundingClientRect();
var posOfDesc = myDesc.getBoundingClientRect();
console.log(pos, posOfDesc, posOfImage);

window.onresize = function() {
  pos = movementContainer.getBoundingClientRect();
  posOfImage = myImage.getBoundingClientRect();
  posOfDesc = myDesc.getBoundingClientRect();
};


  function move() {
    if(toggleMove == true){
      myImage.style.left = `${pos.width - posOfImage.width}px`;
      console.log(pos.width - posOfImage.width);
      myDesc.style.right = `${pos.width - posOfDesc.width}px`;
      toggleMove = false;
      return;
    }
    else{
      myImage.style.left = 0 + "px";
      myDesc.style.right = 0 + "px";
      toggleMove = true;
    }
  }

