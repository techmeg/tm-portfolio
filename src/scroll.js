const links = document.querySelectorAll('.links');
const navbar = document.getElementById('navbar');
const navDim = navbar.getBoundingClientRect();
console.log('nav', navDim)
const work = document.getElementById('work')
workDim = work.getBoundingClientRect();
console.log('work', workDim)
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight)

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // get element
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navbarHeight;
        //and scroll there
        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})