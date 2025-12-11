function showContent(sectionId) {
var sections = document.getElementsByClassName('content-section');
for(var i=0; i<sections.length; i++) {
sections[i].classList.remove('show');
}
document.getElementById(sectionId).classList.add('show');
}

function getRandomNote() {
var notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var randomNote = notes[Math.floor(Math.random() * notes.length)];
document.getElementById('noteDisplay').textContent = 'Random Note: ' + randomNote;
}
