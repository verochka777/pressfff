const input = document.getElementById('input')
const btnSave = document.getElementById('btn_save')
const btnRemove = document.getElementById('btn_remove')
const text = document.getElementById('text')

const showText = function () {
    text.textContent = sessionStorage.getItem('text')
}

btnSave.addEventListener('click', function () {
    sessionStorage.setItem('text', input.value)
    showText()
})

btnRemove.addEventListener('click', function () {
    localStorage.clear()
    sessionStorage.clear()
    showText()
})

showText()