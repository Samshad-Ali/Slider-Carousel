const slider = document.querySelectorAll(".image");
const preBtn = document.getElementById("pre");
const nextBtn = document.getElementById("next");

slider.forEach((curEle, index) => {
  curEle.style.left = `${index * 100}%`;
});

let counter = 0;

const ImageSlider=()=>{
    slider.forEach(
        (image)=>{
            image.style.transform = `translateX(-${counter*100}%)`
        }
    )
}


preBtn.addEventListener('click',()=>{
    if(counter>0)
    {
        counter--;
        ImageSlider();
    }else{
        counter=slider.length;
    }
})


nextBtn.addEventListener('click',()=>{
    if(counter<4){
        counter++;
        ImageSlider();
    }else{
        counter=-1;
    }
})