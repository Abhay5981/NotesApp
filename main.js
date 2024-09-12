const createBtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
const notes = document.querySelectorAll('.input-box')

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()

// for local storage
function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}
// const updateStorage = () => localStorage.setItem('notes', notesContainer.innerHTML);



createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p')
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', true)
    img.src = 'images/delete.png'
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage()
})

notesContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateStorage()
    }
})
notesContainer.addEventListener('input', () => {
    updateStorage();
});

document.addEventListener('keydown', event=>{
    if(event.key=== 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault()
        
    }
})
