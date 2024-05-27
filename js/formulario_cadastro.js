document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message';
    cadastroForm.appendChild(messageContainer);

    // Definição de campos (movida para fora da função)
    const campos = ['nome', 'email', 'senha', 'confirmSenha'];

    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (formIsValid()) {
            alert("Formulário enviado!");
            window.location.href = '/Projeto_Proz/index.html';
        }
    });
// Função para exibir mensagens de erro
    function displayErrorMessage(message, campoId) {
        let mensagemErro = document.getElementById(`${campoId}-error`);
        if (!mensagemErro) {
            mensagemErro = document.createElement('span');
            mensagemErro.id = `${campoId}-erro`;
            mensagemErro.classList.add('mensagem-erro');
            document.getElementById(campoId).parentNode.insertBefore(mensagemErro, document.getElementById(campoId).nextSibling);
        }
        mensagemErro.textContent = message;
        mensagemErro.style.display = 'block';
    }

    // Função para validar o formulário (movida para dentro do DOMContentLoaded)
    function formIsValid() {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmSenha = document.getElementById('confirmSenha').value;
messageContainer.innerHTML = ''; // Limpa as mensagens de erro anteriores

        let isValid = true; // Inicializa isValid como true

        if (nome === '') {
            displayErrorMessage('Nome é obrigatório.', 'nome');
            isValid = false;
        }

        if (email === '') {
            displayErrorMessage('Email é obrigatório.', 'email');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayErrorMessage('Email inválido.', 'email');
            isValid = false;
        }

        if (senha === '') {
            displayErrorMessage('Senha é obrigatória.', 'senha');
            isValid = false;
        }

        if (confirmSenha === '') {
            displayErrorMessage('Confirmação de senha é obrigatória.', 'confirmSenha');
            isValid = false;
        } else if (senha !== confirmSenha) {
            displayErrorMessage('As senhas não coincidem.', 'confirmSenha');
            isValid = false;
        }

        return isValid; // Retorna o resultado da validação
    }
function validateEmail(email) {
        // Expressão regular mais completa para validar o formato do email
        const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Adiciona eventos para ocultar as mensagens ao digitar
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        campo.addEventListener('input', function () {
            const mensagemErro = document.getElementById(`${campoId}-error`);
            mensagemErro.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fecharFormularioBtn = document.getElementById('fecharFormulario');

    fecharFormularioBtn.addEventListener('click', function () {
        // Redireciona de volta para a página index.html
        window.location.href = './index.html';
    });
});
