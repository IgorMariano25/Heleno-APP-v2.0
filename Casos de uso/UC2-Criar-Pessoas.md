## UC2 Criar Pessoas
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

