# Ibtech

# Descrição:::

***O projeto visa facilitar a apresentação dos projetos feitos pelos alunos da instituição Ibmec nos cursos de tecnologia, tendo como base a apresentação de portifólios dos alunos bem como os resultados alcançados por eles.***

# História:asdiosdfkmsdamn

***O Projeto Heleno surgiu em 2022 como projeto final da disciplina de Projeto Front-end do curso de Análise e Desenvolvimento de Sistemas do IBMEC. Seu idealizador foi o professor Eduardo Mangeli e seu desenvolvimento ficou a cargo dos alunos Clarissa Proença, Guilherme Félix, Felipe Castelhano e Igor Mariano do primeiro período. O foco do site são os alunos e os projetos desenvolvidos por eles. Através dessa plataforma alunos de todos os períodos, dos cursos de tecnologia, poderão mostrar os códigos e projetos que desenvolveram ou venham a desenvolver ao longo de sua formação acadêmica.***

# Status do projeto: Em desenvolvimento




# Técnicas de lavantamento de requisito: bundas

* ***Entrevista***
* ***Prototipação***

# Listagem de requisitos:

## Funcionais:

* ***Permitir o cadastro de novos usuários;***
* ***Permitir o cadastro de novos projetos;***
* ***Permitir o cadastro de novas tecnologias;***
* ***Possibilitar que o usuário realize buscas por pessoas;***
* ***Possibilitar que o usuário realize buscas por projetos;***
* ***Possibilitar que o usuário filtre as informações de busca por pessoas;***
* ***Possibilitar que o usuário filtre as informações de busca por projetos;***
* ***Exibir as informações das pessoas;***
* ***Exibir as informações dos projetos;***
* ***Exibir quais tecnologia foram usadas no projeto;***
* ***Permitir que o usuário adicione arquivos ao projeto;***
* ***Permitir a edição dos projetos;***
* ***Permitir a edição dos perfis dos alunos;***

## Não Funcionias:

* ***Possibilitar que o usuário adicione uma foto ao projeto, com até X (Kb, Mb ou Gb);***
* ***Estar disponível para o usuário 24/7;***
* ***Criptografar a senha do usuário;***
* ***Deve rodar em vários tipos de navegadores;***
* ***Estar hospedado no GitLab Pages;***
* ***Ser elaborado com o React;***

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
