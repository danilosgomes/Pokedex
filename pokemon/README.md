## **Playlist de Pokémon - Frontend**

### **Descrição**

Este projeto implementa o frontend de uma aplicação web que funciona como uma espécie de playlist de Pokémon. A aplicação permite aos usuários:

* **Visualizar Pokémon:** Uma lista de Pokémon é exibida, com opções para filtrar e ordenar os resultados por diversos critérios (ID, nome, status, etc.).
* **Explorar por Geração:** Os Pokémon são organizados por suas respectivas gerações, facilitando a navegação e pesquisa.
* **Criar Pokédex:** Os usuários podem criar suas próprias Pokédex, selecionando seus Pokémon favoritos a partir da lista principal.
* **Gerenciar Pokédex:** As Pokédex criadas podem ser visualizadas e os Pokémon adicionados ou removidos.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura básica das páginas.
* **CSS (Bootstrap):** Estilização e layout responsivo.
* **JavaScript:** Lógica da aplicação, utilizando:
    * **Axios:** Para realizar requisições HTTP e buscar dados de uma API (não especificada no prompt).
    * **React Router Dom:** Para gerenciar as rotas da aplicação.
    * **RouterProvider, useState, useEffect:** Hooks do React para gerenciar estado, efeitos colaterais e roteamento.
    * **Outros:** Entre outras bibliotecas e componentes customizados foram utilizados para funcionalidades específicas.

### **Estrutura de Diretórios**

A estrutura de diretórios apresentada na imagem segue uma organização padrão para projetos React:

* **public:** Contém arquivos estáticos como imagens e o arquivo index.html.
* **src:** Contém o código fonte da aplicação:
    * **assets:** Armazena os arquivos de imagem utilizados na aplicação.
    * **Card:** Onde contém as especificações da apresentação do Pokémon na rota *Pokémons*.
    * **css:** Arquivos CSS personalizados.
    * **pages:** Contém os componentes das diferentes páginas da aplicação (Home, Pokemons, Gerações, MinhaPokedex).
    * **services:** Contém os serviços utilizados para fazer requisições à API e obter os dados dos Pokémon e da Pokédex.
    * **components:** Contém a modularização do Header da Navbar.

### **Rotas Implementadas**

* **Home:** Página inicial da aplicação.
* **Pokemons:** Lista todos os Pokémon, com opções de filtragem e ordenação.
* **Gerações:** Exibe os Pokémon organizados por geração.
* **MinhaPokedex:** Permite ao usuário criar e gerenciar suas próprias Pokédex.

### **Funcionalidades Adicionais**

* **Botão para adicionar Pokémon à Pokédex:** Na página de listagem de Pokémon, um botão permite adicionar o Pokémon selecionado à Pokédex do usuário.
* **Visualização da Pokédex:** Ao clicar em uma Pokédex criada, os Pokémon selecionados são exibidos na página de Pokemons.
