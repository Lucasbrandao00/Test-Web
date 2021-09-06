package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPage;

public class LoginSteps {

	public static WebDriver driver;

	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.facebook.com/index.php?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php");
		driver = Hooks.getDriver();
	}

	@Quando("^informar o campo Email ou telefone como \"([^\"]*)\"$")
	public void informar_o_campo_Email_ou_telefone_como(String arg1) throws Throwable {
		LoginPage lf = new LoginPage(driver);
		lf.preencherEmail("lucasbrandao00@hotmail.com");

	}

	@Quando("^informar o campo Senha \"([^\"]*)\"$")
	public void informar_o_campo_Senha(String arg1) throws Throwable {
		LoginPage lf = new LoginPage(driver);
		lf.preencherSenha("400289223d");
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPage lf = new LoginPage(driver);
		lf.clicarBotaoEntrar();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina contendo o campo mensagem$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_campo_mensagem() throws Throwable {
		LoginPage lf = new LoginPage(driver);
		//lf.validarFace();
	}

}
