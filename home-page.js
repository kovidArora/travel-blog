document.querySelectorAll('.nation').forEach(div => {
    div.addEventListener('click', () => {
      // Remove all other .nation divs
      document.querySelectorAll('.nation').forEach(d => {
        if (d !== div) {
          d.remove();  
        }
      });
      div.classList.add('no-after');
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.onclick = function() {
      window.location.reload();
};
      button.textContent = "Go Back";

      div.appendChild(button);
      if(div.id=='nation1')
        div.classList.add('scale-in-tl');
      if(div.id=='nation2')
        div.classList.add('scale-in-tr');
      if(div.id=='nation3')
        div.classList.add('scale-in-bl');
      if(div.id=='nation4')
        div.classList.add('scale-in-br');
    });
  });



  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      window.location.reload(); 
   });
});

// document.querySelectorAll('button').forEach(button => {
//   button.addEventListener('click', () => {
//     if (window.history.length > 1) {
//       window.history.back();
//     } else {
//       window.location.href = '/';
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select all grid items with the "nation" class
  const gridItems = document.querySelectorAll('.nation');

  gridItems.forEach(div => {
    div.addEventListener('click', () => {
      // Remove all other .nation divs except the clicked one
      document.querySelectorAll('.nation').forEach(d => {
        if (d !== div) {
          d.remove();
        }
      });

      // Remove existing custom text from the clicked div, if any
      const existingText = div.querySelector('.custom-text');
      if (existingText) {
        existingText.remove();
      }

      // Add custom text for the clicked grid item
      let customText = document.createElement('p');
      customText.classList.add('custom-text');

      // Set the text based on the grid item's ID
      if (div.id === 'nation1') {
        customText.textContent = "Welcome to the USA!";
      } else if (div.id === 'nation2') {
        customText.textContent = "Discover the beauty of Switzerland!";
      } else if (div.id === 'nation3') {
        customText.textContent = "Experience the wonders of Japan!";
      } else if (div.id === 'nation4') {
        customText.textContent = "Relax in the serene landscapes of Bali!";
      }
      div.appendChild(customText);
    });
  });
});



