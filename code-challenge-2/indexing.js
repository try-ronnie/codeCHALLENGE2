const button1 = document.getElementById('btn1')

button1.addEventListener('click' , function(on){
  on.preventDefault();
  const listItem = document.createElement('li')
  const guestNames = document.getElementById('opp').value;
  const proper = document.createElement('button');
  proper.textContent = 'remove'
  proper.addEventListener('click' , function(){
    listItem.remove();
  });

listItem.textContent = guestNames;
listItem.appendChild(proper);
document.getElementById('guester').appendChild(listItem);
document.getElementById('opp').value = '';
if (document.getElementById('guester').children.length >= 10) {
  alert('guest list is full');

}

const opperBtn = document.createElement('button');
opperBtn.textContent = 'NOT ATTENDING';
opperBtn.addEventListener('click' , function(){
if(opperBtn.textContent === "NOT ATTENDING"){
  opperBtn.textContent = "ATTENDING"
}
})

listItem.appendChild(opperBtn)



})