#language: pt
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema

  @RealizarLogin
  Esquema do Cenario: Realizar Login com Sucesso
    Quando informar o campo Email ou telefone como "<usuario>"
    E informar o campo Senha "<senha>"
    E clicar no botao Login
    Entao o sistema devera autorizar o login, exibindo pagina contendo o campo mensagem

    Exemplos: 
   
      | usuario                    | senha      |
      | lucasbrandao00@hotmail.com | 400289223d |
