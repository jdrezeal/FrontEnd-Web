const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mouseover",(event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPost",x + "px");
    btnEl.style.setProperty("--yPost",y + "px");
});