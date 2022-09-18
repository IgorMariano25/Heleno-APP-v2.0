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


# Descrição de casos de uso:

## Página dos Alunos:

> Caso de uso:
>
> Exibição do espaço individual (card) do aluno
> <hr>
> Referência:
>
> RF11 e RF01 parcialmente
> <hr>
> Descrição geral:
>
> Começa com o usuário do sistema querendo ver as informações de determinada pessoa dentro do sistema.
> <hr>
> Atores:
> 
> Usuário
> <hr>
> Pre-condições:
> 
> acessar o site
> <hr>
> Pós-condições:
> 
> Aparecer as informações do aluno na tela
> <hr>
> Campos:
>
> Foto do aluno, nome do aluno, curso do aluno, semestre que começou o curso, ano em que deve terminar o curso, projetos em que participou e uma breve descrição escrita pelo proprio aluno
> <hr>
> Fluxo básico:
> 
> a) acessar a tela dos alunos
> 
> b) clicar no card de um aluno a fim de mostrar mais informações sobre o aluno
> 
> Fim de caso de uso

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

## UC2 Buscar Pessoas
> ##### Nome:
> 
> Buscar pessoas
> <hr>
> 
> ##### Breve descrição:
> 
> Permitir a um ator buscar por informações de pessoas cadastradas
><hr>
>
> ##### Atores:
> 
> Pessoas
><hr>
>
> ##### Fluxo de eventos:
>
> ##### Fluxo principal:
> 
> P1. o usuário clica na caixa de busca
>
> P2. digita o nome de quem deseja procurar
>
> P3. Exibe as informações da pessoa pesquisada
>
> ##### Fluxo de exceção:
> 
> A1. O sistema não identificou o nome informado
>
> a) Exibe mensagem informando que não foi identificado e pede para reescrever o nome da pessoa

## UC3 Buscar projetos
> ##### Nome:
> 
> Buscar Projetos
> <hr>
> 
> ##### Breve descrição:
> 
> Permitir a um ator buscar por Projetos e portifólios cadastrados
><hr>
>
> ##### Atores:
> 
> Pessoas
><hr>
>
> ##### Fluxo de eventos:
>
> ##### Fluxo principal:
> 
> P1. o usuário clica na caixa de busca
>
> P2. digita o nome do projeto que deseja procurar
>
> P3. Exibe as informações do projeto pesquisado
>
> ##### Fluxo de exceção:
> 
> A1. O sistema não identificou o projeto informado
>
> a) Exibe mensagem informando que não foi identificado e pede para reescrever o nome do projeto

## UC4 Fazer cadastro
> ##### Nome:
> 
> Fazer cadastro
> <hr>
>
> ##### referências:
>
> 
><hr>
>
> ##### Breve descrição:
> 
> O administrador do sistema deve preencher e validar os seus dados pessoais
requeridos para o uso do sistema.
> <hr>
>
> ##### Atores:
> 
> Administrador
> <hr>
>
> ##### Fluxo de eventos:
> 
> ##### Fluxo principal:
> 
> P1. O caso de uso começa quando o administrador clica em cadastrar no sistema
>
> P2. O sistema exibe a tela com as informações que precisam ser preenchidas
>
> P3.  O administrador preenche as informações requeridas pelo sistema
>
> P4. O administrador clica em confirmar
>
> P5.  O sistema valida as informações preenchidas pelo administrador
>
> P6. O sistema armazena as informações inseridas
> 
> ##### Fluxo alternativo
>
> A1. Preencheu o cadastro de maneira incorreta
>
> a) O sistema exibe uma mensagem de erro
>
> b) O sistema indica os campos que possuem as informações incorretas
>
> c) O administrador corrige os campos com as informações corretas
> 
> d) O sistema valida as informações preenchidas pelo administrador
> 
> ##### Fluxo de exceção
>
> <hr>
> 
> ##### Pré condições:
> 
> a)  ter acesso a página inicial do sistema
>
><hr>
> 
> ##### pós-condições:
>
> a) A pessoa é cadastrada no sistema e pode ter acesso
> <hr>
>
> ##### Regras de negócio:
>
> RN1 Registrar dados no cadastro
> 
> RN2 informações devem ser validas

## UC5 Manter pessoas

> **A ser alterado**

## UC6 Manter sobre

> **A ser alterado**

