let lugaresVisitados = [];
        let nomeUsuario = '';
        usuario();

        function usuario() {
            if (!nomeUsuario) {
                nomeUsuario = prompt('Qual é o seu nome?');
                if (!nomeUsuario) {
                    alert('Nome não fornecido. O menu não será exibido.');
                    return;
                }
                document.getElementById('userGreeting').innerText = `${nomeUsuario}, selecione uma das opções abaixo:`;
            }

            let opcao;
            do {
                opcao = prompt(
                    `Escolha uma das opções abaixo:\n` +
                    `1 - Adicionar um lugar na lista de lugares visitados\n` +
                    `2 - Remover um lugar da lista de lugares visitados\n` +
                    `3 - Listar todos os lugares visitados\n` +
                    `4 - Mostrar todos os lugares visitados no documento HTML\n` +
                    `5 - Sair do menu`
                );

                switch(opcao) {
                    case '1':
                        adicionarLugar();
                        break;
                    case '2':
                        removerLugar();
                        break;
                    case '3':
                        listarLugares();
                        break;
                    case '4':
                        mostrarLugaresFile();
                        break;
                    case '5':
                        alert('Saindo do menu.');
                        break;
                    default:
                        alert('Opção inválida. Por favor, escolha uma opção de 1 a 5.');
                }
            } while (opcao !== '4' && opcao !== '5');
        }

        function adicionarLugar() {
            const lugar = prompt('Digite o nome do lugar que deseja adicionar:');
            if (lugar) {
                if (confirm(`Você deseja adicionar o lugar "${lugar}" à lista?`)) {
                    lugaresVisitados.push(lugar);
                    alert(`Lugar "${lugar}" adicionado com sucesso.`);
                }
            }
        }

        function removerLugar() {
            if (lugaresVisitados.length === 0) {
                alert('A lista de lugares está vazia. Não há lugares para remover.');
                return;
            }
            const lugar = prompt('Digite o nome do lugar que deseja remover:');
            if (lugar) {
                const index = lugaresVisitados.indexOf(lugar);
                if (index !== -1) {
                    if (confirm(`Você deseja remover o lugar "${lugar}" da lista?`)) {
                        lugaresVisitados.splice(index, 1);
                        alert(`Lugar "${lugar}" removido com sucesso.`);
                    }
                } else {
                    alert(`O lugar "${lugar}" não está na lista.`);
                }
            }
        }

        function listarLugares() {
            if (lugaresVisitados.length > 0) {
                let listaLugares = 'Lugares visitados:\n';
                lugaresVisitados.forEach((lugar, index) => {
                    listaLugares += `${index + 1} - ${lugar}\n`;
                });
                alert(listaLugares);
            } else {
                alert('A lista de lugares está vazia. Você tem 0 lugares adicionados.');
            }
        }


        function mostrarLugaresFile() {
            if (lugaresVisitados.length > 0) {
                const listaElement = document.getElementById('placesList');
                listaElement.innerHTML = '';
                lugaresVisitados.forEach((lugar, index) => {
                    const itemLista = document.createElement('li');
                    itemLista.textContent = `${index + 1} - ${lugar}`;
                    listaElement.appendChild(itemLista);
                });
            } else {
                document.getElementById('placesList').innerHTML = '<li>A lista de lugares está vazia.</li>';
            }
        }