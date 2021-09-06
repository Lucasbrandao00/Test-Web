package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPage extends MetodosUteis {

	protected WebDriver drievr;

	public LoginPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.ID, using = "email")
	private WebElement email;

	@FindBy(how = How.ID, using = "pass")
	private WebElement senha;

	@FindBy(how = How.NAME, using = "login")
	private WebElement btnEntrar;

	@FindBy(how = How.CLASS_NAME, using = "a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry")
	private WebElement btnMensagen;

	public void preencherEmail(String emailFacebook) throws Exception {
		esperarElemento(email);
		email.clear(); 
		email.sendKeys(emailFacebook);
	}

	public void preencherSenha(String senhaFacebook) throws Exception {
		esperarElemento(senha);
		senha.clear();
		senha.sendKeys(senhaFacebook);
	}

	public void clicarBotaoEntrar() throws Exception {
		esperarElemento(btnEntrar);
		btnEntrar.click();
	}

	public void validarFace() throws Exception {
		esperarElemento(btnMensagen);
		btnMensagen.click();
		
	}
}
