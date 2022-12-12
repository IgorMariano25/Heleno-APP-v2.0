<img src="https://pbs.twimg.com/profile_images/1382706348534730753/TUCMEUXA_400x400.png" alt="drawing" width="25"/>  **Projeto Ibtech**

# Descrição:

* [Descrição](#des)
* [Objetivo do Site](#obj)
* [Público Alvo](#publi)
* [Requisitos](#req)
* [Diagrama de Casos de Uso](#diagr)
* [Descrição e correlação dos Casos de Uso com Requisitos](#uso)
* [Diagrama de Componentes](#comp)
* [Prototipação](#prototi)
* [Participantes](#alunos)
* [Link do Site](#rede)



## <a name = "des"> Descrição </a>
Projeto Front-End para os alunos do primeiro e segundo período de Full Stack realizando a transformação do Site Heleno no Site Ibtech.


## <a name = "obj"> Objetivo do Site </a>
Site da Faculdade Ibmec que permite seus alunos compartilharem portifólios, projetos e até mesmo a criação de Startups.

# Técnicas de lavantamento de requisito:

## <a name = "publi"> Público Alvo </a>
* Alunos do Ibmec;
* Pessoas interessadas em conhecer os projetos da Faculdade;
* Empresas em busca de profissonais.

## <a name = "req"> Requisitos </a>
### > Funcionais
| CÓDIGO | DESCRIÇÃO |
| - | - |
| RF01 | O sistema deve [manter](#legenda) as pessoas.
| RF02 | O sistema deve [manter](#legenda) os projetos.
| RF03 | O sistema deve [manter](#legenda) novas tecnologias.
| RF04 | O sistema deve [manter](#legenda) página IBMEC HUBS.
| RF05 | O sistema deve [manter](#legenda) página Graduação.
| RF06 | O sistema deve [manter](#legenda) página Pós-Graduação.
| RF07 | O sistema deve [manter](#legenda) página MBA.
| RF08 | Possibilitar que o usuário realize buscas por pessoas.
| RF09 | Possibilitar que o usuário realize buscas por projetos.
| RF10 | Possibilitar que o usuário realize buscas por [empresas](#legenda).
| RF11 | Possibilitar que o usuário filtre como informações de busca por pessoas.
| RF12 | Possibilitar que o usuário filtre como informações de busca por projetos.
| RF13 | Possibilitar que o usuário filtre como informações de busca por [empresas](#legenda).
| RF14 | Permitir uma referência entre a pessoa e o projeto.
| RF15 | O sistema deve possibilitar que o usuário adicione uma foto ao projeto, com até X (Kb, Mb ou Gb).
| RF16 | O sistema deve permitir fazer login

- [RF1] Permitir o cadastro de novos usuários;
- [RF2] Permitir o cadastro de novos projetos;
- [RF3] Permitir o cadastro de novas tecnologias;
- [RF4] Possibilitar que o usuário realize buscas por projetos;
- [RF5] Possibilitar que o usuário filtre as informações de busca por pessoas;
- [RF6] Possibilitar que o usuário filtre as informações de busca por projetos;
- [RF7] Exibir as informações dos projetos;
- [RF8] Exibir quais tecnologia foram usadas no projeto;
- [RF9] Permitir que o usuário adicione arquivos ao projeto;
- [RF10] Permitir a edição dos projetos;
- [RF11] Permitir a edição dos perfis dos alunos;
- [RF12] Permitir pesquisar por alunos dentro de um projeto
- [RF13] Permitir adicionar novidades do IBMEC
- [RF14] Possibilitar que o usuário adicione uma foto ao projeto, com até X (Kb, Mb ou Gb);
>##### <a name="legenda"> *Manter: Listar, Visualizar, Editar, Criar e Excluir* </a>
>##### <a name="legenda"> *Empresas: Startups criadas por alunos do Ibmec* </a>

- [RNF1] Estar disponível para o usuário 24/7;
- [RNF2] Criptografar a senha do usuário;
- [RNF3] Deve rodar em vários tipos de navegadores;
- [RNF4] Estar hospedado no GitLab Pages;
- [RNF5] Ser elaborado com o React;

### > Não Funcionais 
| CÓDIGO | DESCRIÇÃO |
| - | - |
| RNF01   | O sistema deve criptografar a senha do usuário.
| RNF02   | Ser elaborado com o React.
| RNF03   | Estar hospedado no GitLab Pages.  
| RNF04   | Estar disponível para o usuário 24/7.   
| RNF05   | O sistema deve ser responsivo. 

## <a name = "diagr"> Diagrama de Casos de Uso </a>
![](https://gitlab.com/EduardoMangeli/ibtech/-/raw/master/Casos_de_Uso_-_Ibtech.png)


###  <a name = "uso"> Descrição e correlação dos Casos de Uso com Requisitos </a>
* [UC01](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC01-cadastrar-login.md) - Cadastrar login
* [UC02](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC02-fazer-login.md) - Verificar Login
* [UC03](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC03-Criar-Pessoas.md) - Criar Pessoas 
* [UC04](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC04-Exibir-e-buscar-Pessoas.md) - Exibir e buscar pessoas
* [UC05](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC04-Exibir-e-buscar-Pessoas.md) - Deleção de pessoas
* [UC06](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC04-Exibir-e-buscar-Pessoas.md) - Atualização de pessoas 
* [UC07](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC07-Criar-projetos.md) - Criar Projetos
* [UC08](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC08-Exibir-e-buscar-projetos.md) - Exibir e buscar projetos
* [UC09](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC09-Atualiza%C3%A7%C3%A3o-de-projeto.md) - Atualização de projetos
* [UC10](https://gitlab.com/EduardoMangeli/ibtech/-/blob/master/Casos%20de%20uso/UC10-Delecao-de-projetos.md) - Deleção de projetos 


## <a name = "comp"> Diagrama de Componentes </a>
![](https://gitlab.com/EduardoMangeli/ibtech/-/raw/master/Diagramas%20de%20componentes/Diagrama_de_componentes-contato_-_P%C3%A1gina_1.png)


## <a name = "prototi"> Prototipação </a>
* Protótipo Graduação Desktop

![](https://gitlab.com/EduardoMangeli/ibtech/-/raw/master/Prot%C3%B3tipos/Gradua%C3%A7%C3%A3o_Desktop.png)

* Protótipo Pós-Graduação Desktop

![](https://gitlab.com/EduardoMangeli/ibtech/-/raw/master/Prot%C3%B3tipos/Po%CC%81s_Proto%CC%81tipo_Desktop.png)

* Protótipo Pós-Graduação Mobile

![](https://gitlab.com/EduardoMangeli/ibtech/-/raw/master/Prot%C3%B3tipos/Po%CC%81s_Proto%CC%81tipo_Mobile.png)

* [Todos os protótipos do projeto](https://gitlab.com/EduardoMangeli/ibtech/-/tree/master/Prot%C3%B3tipos)


## <a name = "alunos"> Participantes </a>
* Professor: Eduardo Mangeli

* Alunos: Amanda Senra, Victor Hugo Rocha, Matheus Herzog, William Fagundes, Caio da luz, Gabriel Espósito, Guilherme Maia, Ilidio , João Victor Meirelles, João Pedro Constant, Leonardo Campello, Maria Giulia , Pedro Reis, Augusto Amorim, Thaís Bustamante, Gabriel Oscar, Vitor Lobianco, Raphael Meres, João Curvelho, Theo Furtado, Rafael Neiva, Beatriz Moura, Gabriel Martinez, João Pedro Correia

## <a name = "rede"> Link do Site </a>

<https://ibtech.sendodigital.com/>

```
cd existing_repo
git remote add origin https://gitlab.com/projeto-multidisciplinar/projeto-eleno.git
git branch -M main
git push -uf origin main
```

### Caso de uso adicionado 

# Requisitos debatidos pela turma

### GERAL
- Criar a area do Hubs, Graduações, Pós Graduações e MBA.

- Deixar a navbar presa.

- Deixar o footer solto.

- Deixar responsivo.

### HOME
- Tirar a secao de alunos

- Tirar a secao de projetos

- Colocar um `Como Chegar no Ibmec` google maps

- Seção para falar sobre o Hubs, com botão para levar a aba própria do Hubs

### PORTFOLIOS
- Colocar o nome do lider do projeto no card da lista.

- Tirar os nomes de todos os participantes do card da lista.

- Tirar a lista de projetos dos alunos.

- Colocar a lista de projetos do ibmec.

- Ao clicar no card, aparecer todos os participantes com as tecnologias.

### ALUNOS

- Ao clicar no card, aparecer todos os projetos do aluno.

- Ajeitar o estilo do card.

### CONTATO

- Integrar o botao `enviar mensagem` com o whatsapp.

- Transformar o botao de mensagem em uma textarea.

### SOBRE 

- Colocar a galeria das turmas e seus respectivos projetos.
