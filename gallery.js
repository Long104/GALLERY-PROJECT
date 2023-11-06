let index = 1;

showGallery()
function showGallery(n) {
    let gallery = document.getElementsByClassName("gallery");
    let dots = document.getElementsByClassName("dots");
    for (let i=0; i < gallery.length; i++) {
        gallery[i].style.display = "none"
    }


    index = (index > gallery.length) ? 1 : (index < 1) ? gallery.length : index;

    for (let i=0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "") 
    }

   

    
    





    gallery[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}


function change(n) {

    showGallery(index += n)

}

function dot(n) {
    showGallery(index = n)
}