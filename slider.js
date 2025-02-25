let indexImages = 0;
let proxImagem = 0;

function slider() {
    const allImages = document.querySelectorAll('.imgslider');
    
    indexImages++;

    if (indexImages >= allImages.length) {
        indexImages = 0;
        allImages.forEach((img)=>{
            img.style.transform = "translateX(0px)";
          
        });
    }

    allImages.forEach((img)=>{
        img.style.transform = `translateX(-${indexImages * 100}%)`;
    });
    

}

setInterval(slider, 2000);