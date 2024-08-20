let funcionarios = {};

// Função para criar/adicionar um novo funcionário
function criar(id, nome, email, senha, foto) {
    if (funcionarios[id]) {
        return "ID já existente. Funcionário não pode ser adicionado.";
    }
    
    funcionarios[id] = {
        nome: nome,
        email: email,
        senha: senha,
        foto: foto
    };
    
    return `Funcionário ${nome} adicionado com sucesso!`;
}

function buscar(id) {
    if (funcionarios[id]) {
        let funcionario = funcionarios[id];
        return `Funcionário encontrado: ID: ${id}, Nome: ${funcionario.nome}, Email: ${funcionario.email}`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function editar(id, novoNome, novoEmail, novaSenha, novaFoto) {
    if (funcionarios[id]) {
        funcionarios[id].nome = novoNome || funcionarios[id].nome;
        funcionarios[id].email = novoEmail || funcionarios[id].email;
        funcionarios[id].senha = novaSenha || funcionarios[id].senha;
        funcionarios[id].foto = novaFoto || funcionarios[id].foto;
        
        return `Funcionário do ID: ${id} foi editado com sucesso! Suas novas informações são: Nome: ${funcionarios[id].nome}, Email: ${funcionarios[id].email}`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function apagar(id) {
    if (funcionarios[id]) {
        delete funcionarios[id];
        return `Funcionário do ID: ${id} foi apagado com sucesso!`;
    } else {
        return "Funcionário não foi encontrado.";
    }
}

function menu() {
    let opcao;
    let resultado = "";

    do {
        // Exibe o menu de opções e solicita ao usuário que escolha uma opção
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1 - Adicionar funcionário\n" +
            "2 - Buscar funcionário\n" +
            "3 - Editar funcionário\n" +
            "4 - Apagar funcionário\n" +
            "5 - Sair do Menu\n\n" +
            resultado
        );

        switch(opcao) {
            case '1':
                let criarId = prompt("Digite o ID do funcionário:");
                let criarNome = prompt("Digite o nome do funcionário:");
                let criarEmail = prompt("Digite o email do funcionário:");
                let criarSenha = prompt("Digite a senha do funcionário:");
                let criarFoto = prompt("Digite o caminho da foto do funcionário:");
                resultado = criar(criarId, criarNome, criarEmail, criarSenha, criarFoto);
                break;
                
            case '2':
                let buscarId = prompt("Digite o ID do funcionário que deseja buscar:");
                resultado = buscar(buscarId);
                break;
                
            case '3':
                let editarId = prompt("Digite o ID do funcionário que deseja editar:");
                let novoNome = prompt("Digite o novo nome do funcionário (ou deixe em branco para não alterar):");
                let novoEmail = prompt("Digite o novo email do funcionário (ou deixe em branco para não alterar):");
                let novaSenha = prompt("Digite a nova senha do funcionário (ou deixe em branco para não alterar):");
                let novaFoto = prompt("Digite o novo caminho da foto do funcionário (ou deixe em branco para não alterar):");
                resultado = editar(editarId, novoNome, novoEmail, novaSenha, novaFoto);
                break;
                
            case '4':
                let apagarId = prompt("Digite o ID do funcionário que deseja apagar:");
                resultado = apagar(apagarId);
                break;
                
            case '5':
                console.log("Saindo do menu...");
                break;
                
            default:
                resultado = "Opção inválida. Tente novamente.";
        }
    } while(opcao !== '5');
}

menu();
