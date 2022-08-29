var btn=document.getElementById('formbutton');
btn.addEventListener('click', function handleClick(event) {
      // 👇️ if you are submitting a form (prevents page reload)
      event.preventDefault();
    
      const Name = document.getElementById('name');
      console.log(Name.value);
      Name.value = '';

      const email = document.getElementById('email');
      console.log(email.value);
      email.value = '';

      const message = document.getElementById('message');
      console.log(message.value);
      message.value = '';

    });
