const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

          iconEye.addEventListener('click', () => {
            // Chage password to text
            if(input.type === 'password'){
                // Swiich to text
                input.type = 'text';

                // Icone change
                iconEye.classList.add('ri-eye-line')
                iconEye.classList.remove('ri-eye-off-line')
            }
            else{
                // Swiich to password
                input.type = 'password';

                // Icone change
                iconEye.classList.add('ri-eye-off-line')
                iconEye.classList.remove('ri-eye-line')
            }
          })
}

showHiddenPass('login-pass', 'login-eye')