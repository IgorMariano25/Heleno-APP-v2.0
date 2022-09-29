## UC02 fazer login
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
> E1. Não ter acesso a internet durante o procedimento
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

