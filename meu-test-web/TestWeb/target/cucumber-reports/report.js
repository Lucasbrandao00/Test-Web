$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Email ou telefone como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o campo mensagem",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "lucasbrandao00@hotmail.com",
        "400289223d"
      ],
      "line": 18,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2563020800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 1571175400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Email ou telefone como \"lucasbrandao00@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Senha \"400289223d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o campo mensagem",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "lucasbrandao00@hotmail.com",
      "offset": 41
    }
  ],
  "location": "LoginSteps.informar_o_campo_Email_ou_telefone_como(String)"
});
formatter.result({
  "duration": 201584100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400289223d",
      "offset": 24
    }
  ],
  "location": "LoginSteps.informar_o_campo_Senha(String)"
});
formatter.result({
  "duration": 149645500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 95803600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_campo_mensagem()"
});
formatter.result({
  "duration": 506900,
  "status": "passed"
});
formatter.after({
  "duration": 624876500,
  "status": "passed"
});
});