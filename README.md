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
