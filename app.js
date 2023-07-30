const boton = document.querySelector(".goTop");




window.onscroll = function(){
    if (document.documentElement.scrollTop > 200){
        boton.classList.add('mostrar')
    }else{
        boton.classList.remove('mostrar')
    }
}

boton.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0
    })
})