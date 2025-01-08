document.querySelectorAll('.nation').forEach(div => {
    div.addEventListener('click', () => {
      // Remove all other .nation divs
      document.querySelectorAll('.nation').forEach(d => {
        if (d !== div) {
          d.remove();  // Remove the other divs
        }
        // div.remove
      });
      div.classList.add('no-after');
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
  
  