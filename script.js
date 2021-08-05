//Busca la dentro del dom todas las coincidencias con el elemento panel y los ubica en forma de arrays
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}) 
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
