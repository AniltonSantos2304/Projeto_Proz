document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form'); 
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message';
    loginForm.appendChild(messageContainer);
    const campos = ['email', 'senha'];

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        clearMessageContainer();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;

        let isValid = true;

        if (email === '' || !validateEmail(email)) {
            displayErrorMessage('Email inválido ou em branco.', 'email');
            isValid = false;
        }

        if (senha === '') {
            displayErrorMessage('Senha é obrigatória.', 'senha');
            isValid = false;
        }

        if (isValid && email === 'adm@gmail.com' && senha === 'adm') {
            alert("Login realizado!");
            window.location.href = './index.html'; 
        } else if (isValid) {
            displayErrorMessage('Email ou senha incorretos.', 'senha'); 
        }
    });

    function displayErrorMessage(message, campoId) {
        let mensagemErro = document.getElementById(`${campoId}-erro`);
        if (!mensagemErro) {
            mensagemErro = document.createElement('span');
            mensagemErro.id = `${campoId}-erro`;
            mensagemErro.classList.add('mensagem-erro');
            document.getElementById(campoId).parentNode.insertBefore(mensagemErro, document.getElementById(campoId).nextSibling);
        }
        mensagemErro.textContent = message;
        mensagemErro.style.display = 'block';
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        campo.addEventListener('input', function () {
            const mensagemErro = document.getElementById(`${campoId}-erro`);
            if (mensagemErro) {
                mensagemErro.style.display = 'none';
            }
        });
    });

    function clearMessageContainer() {
        messageContainer.innerHTML = '';
    }

    const fecharFormularioBtn = document.getElementById('fecharFormulario');

    fecharFormularioBtn.addEventListener('click', function () {
        window.location.href = './index.html';
    });
});
