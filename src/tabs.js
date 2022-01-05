const panels = document.querySelectorAll('.panel');

function togglePanel() {
    console.log(this)
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.toggle('open')

}

panels.forEach(panel => panel.addEventListener('click', togglePanel))
