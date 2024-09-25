# Pokémon Playlist - Backend

Este repositório contém o backend da aplicação "Pokémon Playlist", que permite ao usuário criar e gerenciar sua própria Pokédex, visualizando Pokémons organizados por geração, além de poder filtrar e adicionar Pokémons às suas Pokédexes. O backend é construído utilizando **Spring Boot** e expõe APIs para interação com o frontend e integração com uma API externa de Pokémons.

## Funcionalidades Principais

### 1. Home
- Rota principal que serve como ponto de entrada para o sistema.

### 2. Pokémons
- **Rota**: `/pokemons`
- Exibe um número X de Pokémons, com a possibilidade de aplicar filtros e ordenações baseados em:
  - ID
  - Nome
  - Vida
  - Ataque
  - Defesa
  - Velocidade

### 3. Gerações
- **Rota**: `/generations`
- Exibe os Pokémons organizados por geração. Cada geração contém os Pokémons pertencentes à ela.

### 4. Minha Pokédex
- **Rota**: `/pokedex`
- Permite ao usuário:
  - Criar novas Pokédexes.
  - Visualizar as Pokédexes criadas.
  - Adicionar Pokémons a uma Pokédex.
  - Ao clicar em uma Pokédex, os Pokémons adicionados a ela são exibidos.

## Estrutura de Diretórios

O projeto segue a estrutura padrão de uma aplicação **Spring Boot**, organizada nas seguintes pastas e arquivos:

```
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂ufc
 ┃ ┃ ┃ ┃ ┗ 📂pokedex
 ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PokeConfig.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PokedexController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Pokedex.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Pokemon.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PokedexRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PokemonRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PokeApiService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PokedexService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PokemonService.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PokedexApplication.java
 ┃ ┣ 📂resources
 ┃ ┃ ┗ 📜application.properties
 ┗ 📜README.md
```

### Explicação dos Componentes:

1. **Config**
   - `PokeConfig.java`: Configurações necessárias para a integração com APIs externas, como a API de Pokémons.

2. **Controller**
   - `PokedexController.java`: Controlador responsável pelas rotas de gerenciamento das Pokédexes e Pokémons. Processa as requisições HTTP (GET, POST, etc.) e direciona para os serviços correspondentes.

3. **Model**
   - `Pokedex.java`: Representa a entidade Pokédex, contendo as informações básicas de uma Pokédex criada pelo usuário.
   - `Pokemon.java`: Representa a entidade Pokémon, contendo atributos como ID, nome, vida, ataque, defesa, velocidade, etc.

4. **Repository**
   - `PokedexRepository.java`: Interface que gerencia as operações de persistência das Pokédexes no banco de dados.
   - `PokemonRepository.java`: Interface que gerencia as operações de persistência dos Pokémons no banco de dados.

5. **Service**
   - `PokeApiService.java`: Serviço responsável pela comunicação com a API externa de Pokémons.
   - `PokedexService.java`: Lida com a lógica de negócios relacionada à criação e gerenciamento de Pokédexes.
   - `PokemonService.java`: Lida com a lógica de negócios relacionada aos Pokémons e suas operações.

6. **Application Properties**
   - `application.properties`: Contém as configurações da aplicação, como detalhes do banco de dados, portas, e outras propriedades necessárias para o funcionamento da aplicação.

## Tecnologias Utilizadas

- **Java**: Linguagem de programação principal.
- **Spring Boot**: Framework para desenvolvimento de aplicações backend.
- **Spring Data JPA**: Para integração e manipulação do banco de dados.
- **REST APIs**: Para comunicação entre o frontend e backend, além da integração com a API de Pokémons.
- **PostgreSQL**: Banco de dados utilizado para armazenar informações das Pokédexes e Pokémons.
- **Maven**: Gerenciamento de dependências e construção do projeto.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokemon-playlist-backend.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd pokemon-playlist-backend
   ```

3. Configure o arquivo `application.properties` com as informações do seu banco de dados PostgreSQL:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/pokedex_db
   spring.datasource.username=seu-usuario
   spring.datasource.password=sua-senha
   spring.jpa.hibernate.ddl-auto=update
   ```

4. Compile e execute a aplicação:
   ```bash
   mvn spring-boot:run
   ```

5. Acesse no navegador:
   ```bash
   http://localhost:8080
   ```

## Endpoints

- `GET /pokemons`: Retorna uma lista de Pokémons.
- `GET /generations`: Retorna Pokémons organizados por geração.
- `POST /pokedex`: Cria uma nova Pokédex.
- `PUT /pokedex/{id}/add-pokemon`: Adiciona um Pokémon à Pokédex.
- `GET /pokedex`: Retorna todas as Pokédexes criadas.
