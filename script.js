// Select Elements
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');


const getHex = () => {
  let hexCol = '#';
  // Generate 6 random numbers
 for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }

  // Change the background color and span value to hexCol, defined above
 bodyBcg.style.backgroundColor = hexCol;
 hex.innerHTML = hexCol;
}


hexBtn.addEventListener('click', getHex);
