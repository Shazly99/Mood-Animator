let stars = document.getElementById('stars')
let moon2 = document.getElementById('moon2')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let novial = document.querySelector('.novial')

onscroll=()=>{
    let value=scrollY
    stars.style.left=value + "px";
    moon2.style.top=value * 3 +"px"
    mountains3.style.top=value*2+"px"
    mountains4.style.top=value*1.5+"px";
    river.style.top=value+"px";
    boat.style.top=value+"px";
    boat.style.left=value*3+"px";
    novial.style.fontSize=value+"px"
    if (value>=68) {
        novial.style.fontSize=68+"px";
        novial.style.position="fixed";
        if (value>=465) {
            novial.style.display="none"
        }else{
            novial.style.display="block"
        }
        if (value>=127) {
            document.querySelector('.main').style.background='linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016, #10001f)'

        }
    }


 }