document.addEventListener("DOMContentLoaded", function() {
  changeString(); 
});

function changeString(){
  const textContent = document.getElementById('text')
  textContent.innerHTML = "This is really cool!";
}

document.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});