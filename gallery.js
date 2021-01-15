const filtergallery = document.querySelector(".gallery");
const filterimg = document.querySelectorAll(".gambar");

window.onload = ()=>{ //once window loaded
    filtergallery.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("tools")){
            filtergallery.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active"); 
            let filterName = selectedItem.target.getAttribute("data-name");
            filterimg.forEach((gambar)=>{
                let filterImages = gambar.getAttribute("data-name");
                if((filterImages == filterName) || filterName == "all"){
                    gambar.classList.remove("hide");
                    gambar.classList.add("show");
                }else{
                    gambar.classList.add("hide");
                    gambar.classList.remove("show");
                }
            })
        }
    }
    for (let index = 0; index < filterimg.length; index++) {
        filterimg[index].setAttribute("onclick", "view(this)");
        
    }
}
//
const viewBox = document.querySelector(".view-box"),
viewImg = viewBox.querySelector("img"),
categoryName = viewBox.querySelector(".tittle p"),
closeIcon = viewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

//
function view(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedViwImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    viewImg.src = selectedViwImg;
    viewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = ()=>{
        viewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }
}