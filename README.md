##### *Documentação Nova*
# **PROJETO IBTECH**



## **REQUISITOS FUNCIONAIS**

### **Geral**

| CÓDIGO      | DESCRIÇÃO |
| ----------- | ----------- |
| RF01     | O sistema deve [MANTER*](#legenda) as pessoas     |
| RF02 | O sistema deve [MANTER*](#legenda) os projetos 
| RF03 | O sistema deve [MANTER*](#legenda) novas tecnologias.
| RF04 | O sistema deve [MANTER*](#legenda) o IBMEC HUBS.
| RF05 | Possibilitar que o usuário realize buscas por pessoas.
| RF06 | Possibilitar que o usuário realize buscas por projetos.
| RF07 | Possibilitar que o usuário filtre como informações de busca por pessoas.
| RF08 | Possibilitar que o usuário filtre como informações de busca por projetos.
| RF09 | Permitir uma referência entre a pessoa e o projeto.
| RF10 | Possibilitar busca de empresas.
| RF11 | O sistema deve possibilitar que o usuário adicione uma foto ao projeto, com até X (Kb, Mb ou Gb).
| RF12 | O sistema deve permitir fazer login|

#### <a name="legenda"> *Manter: Listar, Visualizar, Editar, Criar e Excluir* </a>
---

## **REQUISITOS NÃO FUNCIONAIS**



| CÓDIGO      | DESCRIÇÃO |
| ----------- | ----------- | 
| RNF01   | O sistema deve criptografar a senha do usuário.        |
| RNF02   | Ser elaborado com o React.         |
| RNF03   | Estar hospedado no GitLab Pages.       |
| RNF04   | Estar disponível para o usuário 24/7.       |
| RNF05   | O sistema deve ser responsivo.        |


=======

# Descrição de casos de uso:


## UC01 fazer login
> ##### Nome:
> 
> Fazer Login
> <hr>
>
> ##### referências:
>
> RF12
><hr>
> 
> ##### Breve descrição:
> 
> Autentica a pessoa no sistema dando a ele acesso à alterar as informações dos projetos e portifólios
> <hr>
>
> ##### Atores:
> 
> Pessoas, administrador
> <hr>
>
> ##### Fluxo de eventos:
> 
> ##### Fluxo principal:
> 
> P1. Começa quando o ator abre o sistema
>
> P2. O sistema abre a tela inicial para iniciar login
>
> P3. O ator digita seu usuário e senha [FA01]
>
> P4. O ator toca no enter
>
> P5. O sistema autentica o ator [FE01][FE02]
>
> P6. O ator realiza login no sistema
> 
> ##### Fluxo alternativo
>
> A1. O ator esqueceu sua senha
>
> a) O ator seleciona esqueceu a senha
>
> b) O sistema envia um email ao usuário para troca de email
>
> c) O ator abre o email
> 
> d) O ator redefine sua senha
> 
> e) O fluxo principal é recomeçado
> 
> ##### Fluxo de exceção
> 
> E1.Não ter acesso a internet durante o procedimento
>
> a) O sistema informa a falta de acesso a internet
>
> E2. Preenchimento incorreto da senha
>
> a) O sistema informa qe a senha inserida está incorreta
>
> b) O sistema retorna a tela de preenchimento de dados
> 
> <hr>
> 
> ##### Pré condições:
> 
> a) Ter acesso a internet
>
> b) Ter acessado site ou aplicativo do sistema
>
> c) Estar no banco de dados do sistema
><hr>
> 
> ##### pós-condições:
>
> a) ator está logado no sistema
> <hr>
>
> ##### Regras de negócio:
>
> RN1 Senha deve possuir ao menos 8 dígitos, sendo esses números ou caracteres

## Manter pessoas

## UC4 Criar Pessoas
> ##### Nome:
>
> Criar instancias de pessoas
><hr>
> 
> ##### Referencia:
>
> RF01 parcial
><hr>
>
> ##### Descrição geral:
>
> Administrador pretende inserir uma pessoa no sistema
><hr>
>
> ##### Atores:
>
> Administrdor
><hr>
>
> ##### Pré-condições:
>
> Estar logado no sistema
><hr>
>
> ##### Fluxo Principal:
>
> P1. Administrador clica em cadastrar um pessoa
>
> P2. O administrador insere as informações(tais como nome, idade, e foto) da pessoa que se deseja inserir no sistema
>
> P3. Administrador clica no botão salvar
>
> ##### Fluxo Alternativo:
>
> A1. A pessoa inserida já está no sistema
>
> A1.1 O sistema exibe uma mensagem informando que a pessoa inserida já se encontra no sistema
>
> A1.2 O sistema pergunta se deseja atualizar o já existente ou criar uma outra pessoa com o mesmo nome
>
> A1.3 Se o administrador escolher atualizar vai para UC7 P2. Caso escolha salvar um novo, o sistema salva independentemente
>
> ##### Fluxo de Exceção:
>
> E1. As informações inseridas estão com o tipo errado(como ter letra na idade):
> 
> E1.1 Exibe mensagem informando o erro e a localidade do erro
>
> E1.2 O administrador corrige a informação e clica novamente em salvar
><hr>
>
> Pós-condição: 
>
> Uma nova pessoa está inserida no sistema
> 

## UC5 Exibir e buscar Pessoas:

> ##### Caso de uso:
>
> Exibição e busca das pessoas cadastradas no sistema
> <hr>
>
> ##### Referência:
>
> RF01 parcial
> <hr>
>
> ##### Descrição geral:
>
> O usuário deseja ver e pesquisar as pessoas cadastradas no sistema
> <hr>
>
> ##### Ator:
> 
> Usuário
> <hr>
>
> ##### Pré-condições:
> 
> acessar o site
> <hr>
>
> ##### Pós-condições:
> 
> Aparecer as informações da pessoa na tela
> <hr>
>
> ##### Fluxo Principal:
> 
> P1. O usuário clica no link para ir à página das pessoas
> 
> P2. Procura na pagina geral pela pessoa que deseja procurar
> 
> P3. Clica na pessoa específica que deseja ver as informações
> 
> P4. O sistema exibe apenas as informações da pessoa selecionada
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome da pessoa que procura
> 
> A1.3 Sistema exibe as pessoas cadastradas com o nome digitado
> 
> A1.4 Usuário clica na pessoa que procura
> 
> ##### Fluxo de Exceção:
> 
> E1. O nome digitado não consta no sistema
> 
> E1.1 O sistema exibe mensagem informando que o nome digitado não consta no sistema

## UC6 Deleção de Pessoa:

> ##### Nome:
> 
> Deleção de pessoa cadastrada no sistema
> <hr>
> 
> ##### Referencia:
> 
> RF01 parcial
> <hr>
> 
> ##### Breve descrição:
> 
> O administrador quer deletar uma pessoa do sistema
> <hr>
> 
> ##### Ator:
> 
> Administrador
> <hr>
> 
> ##### Pre-condições:
> 
> Ter pessoas cadastradas no sistema e o administrador estar na pagina pessoas
> <hr>
> 
> ##### Pós-condições:
> 
> A pessoa não estar mais constando no sistema
> <hr>
> 
> ##### Fluxo Principal:
> 
> P1. O administrador clica em deletar pessoa
> 
> P2. O administrador escolhe, na lista, a pessoa que quer apagar
>
> P3. O sistema exibe uma tela para escrever o nome da pessoa que quer apagar
> 
> P4. O administrador escreve o nome da pessoa
> 
> P5. O sistema exibe uma mensagem informando que a pessoa foi apagada
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome da pessoa que procura
> 
> A1.3 Sistema exibe as pessoas cadastradas com o nome digitado
> 
> A1.4 Usuário clica na pessoa que procura
> 
> ##### Fluxo de exceção:
> 
> E1. O nome escrito não é o mesmo do nome da pessoa selecionada
> 
> E1.1 O sistema exibe mensagem de que o nome informado não é o mesmo do selecionado


## UC7 Atualização de Pessoa
> ##### Nome:
> 
> Atualização de informação de uma pessoa
> <hr>
> 
> ##### Referencia:
> 
> RF01 parcial
> <hr>
> 
> ##### Breve descrição:
> 
> O administrador quer atualizar as informações de uma pessoa
> <hr>
> 
> ##### Ator:
> 
> Administrador
> <hr>
> 
> ##### Pre-condições:
> 
> A pessoa estar cadastrada no sistema e o administrador estar na pagina pessoas
> <hr>
> 
> ##### Pós-condições:
> 
> A pessoa está com as informações alteradas no sistema
> <hr>
> 
> ##### Fluxo Principal:
> 
> P1. O administrador clica em alterar informações pessoais
> 
> P2. O administrador escolhe, na lista, a pessoa que quer alterar
> 
> P3. O adm altera as informações que desejar
> 
> P4. O sistema exibe a diferença de informações e pegunta se deseja salvar as alterações
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome da pessoa que procura
> 
> A1.3 Sistema exibe as pessoas cadastradas com o nome digitado
> 
> A1.4 Usuário clica na pessoa que procura


## Manter Projetos
## UC4 Criar projetos
> ##### Nome:
>
> Criar instancias de projetos
><hr>
> 
> ##### Referencia:
>
> RF02 parcial
><hr>
>
> ##### Descrição geral:
>
> Administrador pretende inserir um projeto no sistema
><hr>
>
> ##### Atores:
>
> Administrdor
><hr>
>
> ##### Pré-condições:
>
> Estar logado no sistema
><hr>
>
> Pós-condição: 
>
> Um novo projeto está inserido no sistema
> <hr>
>
> ##### Fluxo Principal:
>
> P1. Administrador clica em cadastrar um projeto
>
> P2. O administrador insere as informações(tais como nome, pessoas envolvidas, e foto representativa) do projeto que se deseja inserir no sistema
>
> P3. Administrador clica no botão salvar
>
> ##### Fluxo Alternativo:
>
> A1. O projeto inserido já está no sistema
>
> A1.1 O sistema exibe uma mensagem informando que o projeto inserida já se encontra no sistema
>
> A1.2 O sistema pergunta se deseja atualizar o já existente ou criar um outro projeto com o mesmo nome
>
> A1.3 Se o administrador escolher atualizar vai para UC7 P2. Caso escolha salvar um novo, o sistema salva independentemente
>
> ##### Fluxo de Exceção:

## UC5 Exibir e buscar projetos:

> ##### Caso de uso:
>
> Exibição e busca de projetos cadastrados no sistema
> <hr>
>
> ##### Referência:
>
> RF02 parcial
> <hr>
>
> ##### Descrição geral:
>
> O usuário deseja ver e pesquisar os projetos cadastrados no sistema
> <hr>
>
> ##### Ator:
> 
> Usuário
> <hr>
>
> ##### Pré-condições:
> 
> acessar o site
> <hr>
>
> ##### Pós-condições:
> 
> Aparecer as informações do projeto na tela
> <hr>
>
> ##### Fluxo Principal:
> 
> P1. O usuário clica no link para ir à página dos projetos
> 
> P2. Procura na página geral pelo projeto que deseja procurar
> 
> P3. Clica no projeto específico que deseja ver as informações
> 
> P4. O sistema exibe apenas as informações do projeto selecionado
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome do projeto que procura
> 
> A1.3 Sistema exibe os projetos cadastrados com o nome digitado
> 
> A1.4 Usuário clica no projeto que procura
> 
> ##### Fluxo de Exceção:
> 
> E1. O nome digitado não consta no sistema
> 
> E1.1 O sistema exibe mensagem informando que o nome digitado não consta no sistema

## UC6 Deleção de Projeto:

> ##### Nome:
> 
> Deleção de projeto cadastrado no sistema
> <hr>
> 
> ##### Referencia:
> 
> RF02 parcial
> <hr>
> 
> ##### Breve descrição:
> 
> O administrador quer deletar um projeto do sistema
> <hr>
> 
> ##### Ator:
> 
> Administrador
> <hr>
> 
> ##### Pre-condições:
> 
> Ter o projeto cadastrado no sistema e o administrador estar na pagina projetos
> <hr>
> 
> ##### Pós-condições:
> 
> O projeto não estar mais constando no sistema
> <hr>
> 
> ##### Fluxo Principal:
> 
> P1. O administrador clica em deletar projeto
> 
> P2. O administrador escolhe, na lista, o projeto que quer apagar
>
> P3. O sistema exibe uma tela para escrever o nome do projeto que quer apagar
> 
> P4. O administrador escreve o nome do projeto
> 
> P5. O sistema exibe uma mensagem informando que o projeto foi apagado
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome do projeto que procura
> 
> A1.3 Sistema exibe os projetos cadastrados com o nome digitado
> 
> A1.4 Usuário clica no projeto que procura
> 
> ##### Fluxo de exceção:
> 
> E1. O nome escrito não é o mesmo do nome do projeto selecionado
> 
> E1.1 O sistema exibe mensagem de que o nome informado não é o mesmo do selecionado


## UC7 Atualização de projeto
> ##### Nome:
> 
> Atualização de informação de um projeto
> <hr>
> 
> ##### Referencia:
> 
> RF02 parcial
> <hr>
> 
> ##### Breve descrição:
> 
> O administrador quer atualizar as informações de um projeto
> <hr>
> 
> ##### Ator:
> 
> Administrador
> <hr>
> 
> ##### Pre-condições:
> 
> O projeto estar cadastrado no sistema e o administrador estar na pagina Projetos
> <hr>
> 
> ##### Pós-condições:
> 
> O projeto estar com as informações alteradas no sistema
> <hr>
> 
> ##### Fluxo Principal:
> 
> P1. O administrador clica em alterar informações
> 
> P2. O administrador escolhe, na lista, o projeto que quer alterar
> 
> P3. O adm altera as informações que desejar
> 
> P4. O sistema exibe a diferença de informações e pegunta se deseja salvar as alterações
>
> P5. O sistema salva as informações
> 
> ##### Fluxo Alternativo:
> 
> A1. Pesquisar de forma mais eficiente o projeto
> 
> A1.1 Usuário clica na barra de pesquisa
> 
> A1.2 Usuário escreve o nome do projeto que procura
> 
> A1.3 Sistema exibe os projetos cadastrados com o nome digitado
> 
> A1.4 Usuário clica no projeto que procura
>
> ##### Fluxo de exceção:
> 
> E1. O administrador não quer salvar as alterações
> 
> E1.1 O administrador seleciona para não salvar as alterações
> 
> E1.2 O sistema ignora as alterações escritas
