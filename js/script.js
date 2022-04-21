const btn =document.getElementById('menu-btn')
const nav =document.getElementById('menu')

btn.addEventListener('click', ()=> {
    btn.classlist.toggle('open')
    nav.classlist.toggle('flex')
    nav.classlist.toggle('hidden')

})
