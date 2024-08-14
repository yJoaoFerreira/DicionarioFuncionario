// 01. Criar um dicionário para guardar o ID e o Nome dos Funcionários; (feito)
// 02. Criar a função de criar e buscar; (feito)
// 03. Criar a função de editar e apagar; (feito)
// 04. ID deve salvar Nome, Usuário, Senha e Foto de Perfil;

// Criação de um objeto para armazenar os funcionários, onde cada chave é o ID do funcionário e o valor é o nome
let funcionarios = {};

// Função para adicionar um novo funcionário ao objeto
function criar(id, nome) {
    // Verifica se o ID já existe no objeto de funcionários
    if (funcionarios[id]) {
        return "ID já existente. Funcionário não pode ser adicionado.";  // Retorna uma mensagem de erro se o ID já estiver em uso
    }
    // Adiciona o novo funcionário ao objeto
    funcionarios[id] = nome;
    return `Funcionário "${nome}" adicionado com sucesso!`;  // Retorna uma mensagem de sucesso
}

// Função para buscar um funcionário pelo ID
function buscar(id) {
    // Verifica se o funcionário existe no objeto de funcionários
    if (funcionarios[id]) {
        return `Funcionário encontrado: ID: "${id}", Nome: "${funcionarios[id]}"`;  // Retorna uma mensagem com as informações do funcionário
    } else {
        return "Funcionário não foi encontrado.";  // Retorna uma mensagem se o funcionário não for encontrado
    }
}

// Função para editar o nome de um funcionário existente
function editar(id, novoNome) {
    // Verifica se o funcionário existe no objeto de funcionários
    if (funcionarios[id]) {
        funcionarios[id] = novoNome;  // Atualiza o nome do funcionário
        return `Funcionário do ID: "${id}" foi editado com sucesso! Novo nome: "${novoNome}"`;  // Retorna uma mensagem de sucesso
    } else {
        return "Funcionário não foi encontrado.";  // Retorna uma mensagem se o funcionário não for encontrado
    }
}

// Função para apagar um funcionário pelo ID
function apagar(id) {
    // Verifica se o funcionário existe no objeto de funcionários
    if (funcionarios[id]) {
        delete funcionarios[id];  // Remove o funcionário do objeto
        return `Funcionário do ID: "${id}" foi apagado com sucesso!`;  // Retorna uma mensagem de sucesso
    } else {
        return "Funcionário não foi encontrado.";  // Retorna uma mensagem se o funcionário não for encontrado
    }
}

// Função principal para exibir o menu e executar as operações
function menu() {
    let opcao;  // Variável para armazenar a escolha do usuário
    let resultado = "";  // Variável para armazenar o resultado da última operação

    // Loop que mantém o menu ativo até o usuário escolher sair
    do {
        // Exibe o menu de opções ao usuário e mostra o resultado da última operação
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1 - Adicionar funcionário\n" +
            "2 - Buscar funcionário\n" +
            "3 - Editar funcionário\n" +
            "4 - Apagar funcionário\n" +
            "5 - Sair do Menu\n\n" +
            resultado
        );

        // Executa a função correspondente com base na escolha do usuário
        switch(opcao) {
            case '1':  // Adicionar funcionário
                let criarId = prompt("Digite o ID do funcionário:");  // Solicita o ID
                let criarNome = prompt("Digite o nome do funcionário:");  // Solicita o nome
                resultado = criar(criarId, criarNome);  // Chama a função de criar e armazena o resultado
                break;
            case '2':  // Buscar funcionário
                let buscarId = prompt("Digite o ID do funcionário que deseja buscar:");  // Solicita o ID
                resultado = buscar(buscarId);  // Chama a função de buscar e armazena o resultado
                break;
            case '3':  // Editar funcionário
                let editarId = prompt("Digite o ID do funcionário que deseja editar:");  // Solicita o ID
                let novoNome = prompt("Digite o novo nome do funcionário:");  // Solicita o novo nome
                resultado = editar(editarId, novoNome);  // Chama a função de editar e armazena o resultado
                break;
            case '4':  // Apagar funcionário
                let apagarId = prompt("Digite o ID do funcionário que deseja apagar:");  // Solicita o ID
                resultado = apagar(apagarId);  // Chama a função de apagar e armazena o resultado
                break;
            case '5':  // Sair do menu
                console.log("Saindo do menu...");  // Exibe uma mensagem de saída
                break;
            default:  // Opção inválida
                resultado = "Opção inválida. Tente novamente.";  // Armazena uma mensagem de erro
        }
    } while(opcao !== '5');  // O loop continua até o usuário escolher a opção de sair
}

// Inicia o menu
menu();