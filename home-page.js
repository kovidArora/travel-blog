document.querySelectorAll('.nation').forEach(div => {
    div.addEventListener('click', () => {
      // Remove all other .nation divs
      document.querySelectorAll('.nation').forEach(d => {
        if (d !== div) {
          d.remove();  // Remove the other divs
        }
        // div.remove
      });
      div.classList.add('scale-up-center');
    });
  });
  
  