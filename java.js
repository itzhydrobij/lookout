document.getElementById('halohalo').addEventListener('click', function() {
    const name = document.getElementById('pandesal').value.trim();
  
    if (name !== '') {
      document.getElementById('lecheflan').style.display = 'none';
      document.getElementById('cornetto').style.display = 'block';
      
      document.getElementById('loading').style.display = 'none'; // Hide loading animation initially
  
      document.getElementById('yesButton').addEventListener('click', function() {
        document.getElementById('loading').style.display = 'block'; // Show loading animation
  
        // Simulate delay for loading (you can replace this timeout with actual tasks)
        setTimeout(function() {
          document.getElementById('loading').style.display = 'none'; // Hide loading animation
          const message = `Hi ${name}you keep looking but that's okay because you taught me how to do this. ths will serve as a teaser for my actual surprise. i would still like to tell you that i love you very much and i appreciate you a lot. I love you, my dear future husband `;
  
          const currentDate = new Date().toLocaleString();
          const finalMessage = `${message}<br><br><strong>Date and Time:</strong> ${currentDate}<br><br><em>Screenshot the whole screen and send it to the owner/Dion.</em>`;
          
          document.getElementById('maisconyelo').innerHTML = finalMessage;
        }, 2000); // Simulating a 2-second delay (replace with your actual task)
      });
    } else {
      alert('Please enter your name.');
    }
  });
  