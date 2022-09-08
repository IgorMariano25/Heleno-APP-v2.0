# Projeto-ibtech

# Descrição:

***O projeto visa facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia, tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.***

# História:

***O Projeto surgiu em 2022 como projeto final da disciplina de Projeto Front-end do curso de Análise e Desenvolvimento de Sistemas do IBMEC. Seu idealizador foi o professor Eduardo Mangeli e seu desenvolvimento ficou a cargo dos alunos Clarissa Proença, Guilherme Félix, Felipe Castelhano e Igor Mariano do primeiro período. O foco do site são os alunos e os projetos desenvolvidos por eles. Através dessa plataforma alunos de todos os períodos, dos cursos de tecnologia, poderão mostrar os códigos e projetos que desenvolveram ou venham a desenvolver ao longo de sua formação acadêmica.***

# Status do projeto: Em desenvolvimento




# Técnicas de lavantamento de requisito: bundas

* ***Entrevista***
* ***Prototipação***

## <a name="requisitos"> Listagem de requisitos:

### Funcionais:

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

### Não Funcionias:

- [RNF1] Possibilitar que o usuário adicione uma foto ao projeto, com até X (Kb, Mb ou Gb);
- [RNF2] Estar disponível para o usuário 24/7;
- [RNF3] Criptografar a senha do usuário;
- [RNF4] Deve rodar em vários tipos de navegadores;
- [RNF5] Estar hospedado no GitLab Pages;
- [RNF6] Ser elaborado com o React;


# Técnica de descrição de requisitos a ser utilizada:

*  ***História de usuário com critérios de aceitação***

# Gestão de ramos (branchs) escolhida para esse projeto:

* *A gestão de ramos (branchs) escolhida para esse projeto foi: Integração Contínua* 

O motivo pelo qual o grupo escolheu essa gestão de ramos (branchs) foi porque ela é altamente recomendada para ser utilizada em conjunto com os processos de desenvolvimento ágil de software. Além disso, a medida que o desenvolvedor efetua alterações no código ele deve disponibilizar essas alterações no repositório ***(develop)*** para que os outros desenvolvedores tenham acesso a ele, visando facilitar a compreensão do código desenvolvido. Outro fator que contribuiu para a nossa escolha se deve ao fato da rastreabilidade de erros ser facilitada, justamente porque o código será atualizado constantimente com pequenos commits.

[Explicação da integração contínua](https://aws.amazon.com/pt/devops/continuous-integration/#:~:text=Explica%C3%A7%C3%A3o%20da%20integra%C3%A7%C3%A3o%20cont%C3%ADnua&text=Os%20principais%20objetivos%20da%20integra%C3%A7%C3%A3o,lan%C3%A7ar%20novas%20atualiza%C3%A7%C3%B5es%20de%20software.)
[Dicas para usar os repositórios com integração contínua ](https://www.atlassian.com/br/continuous-delivery/continuous-integration/ci-friendly-git-repos)


# Definição da Branchs:

***Teremos:***

* ***(1) MAIN***
* ***(2) DEVELOP***
* ***(3) IMAGENS/LAYOUT***

### Decidir uma das opções abaixo 
* [Fluxo de trabalho de um branch de recurso do Git Flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) 
* [Desenvolvimento baseado em tronco](https://www.atlassian.com/br/continuous-delivery/continuous-integration/trunk-based-development)
* [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
* [Git Flow: o que é e como gerenciar branches? Exemplos!](https://blog.betrybe.com/git/git-flow/)
* [Integração contínua](https://www.atlassian.com/br/continuous-delivery/continuous-integration)

***A equipes escolheu  Integração Contínua***

# Link para site do projeto
Projeto Heleno: http://projeto-multidisciplinar.gitlab.io/heleno-app/

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

