

function Test2()
{
  //Iterates through the specified browsers.
  var BrowserItems, i, RecordIdx;
  BrowserItems = new Array(4);
  BrowserItems[0] = Browsers.Item("firefox");
  BrowserItems[1] = Browsers.Item("chrome");
  BrowserItems[2] = Browsers.Item("edge");
  BrowserItems[3] = Browsers.Item("iexplore");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("http://smartbeardermot/shoppingcart/login.php");
    Project.Variables.DataSource.Reset();
    for(RecordIdx = 1; RecordIdx <= 4; RecordIdx++)
    {
      //Sets the text KeywordTests.Test2.Variables.DataSource("emailinputLoginEmail") in the 'textboxLoginEmail' text editor.
      Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap.textboxLoginEmail.SetText(Project.Variables.DataSource.Value("emailinputLoginEmail"));
      //Sets the text KeywordTests.Test2.Variables.DataSource("passwordboxLoginPassword") in the 'passwordboxLoginPassword' text editor.
      Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap2.passwordboxLoginPassword.SetText(Project.Variables.DataSource.Value("passwordboxLoginPassword"));
      //Clicks the 'buttonLogIn' control.
      Aliases.browser.pageSignUpLoginForm.form.buttonLogIn.ClickButton();
      //Waits until the browser loads the page and is ready to accept user input.
      Aliases.browser.pageAwesomeShoppingStoreProducts.Wait();
      //Clicks at point (342, 343) of the 'panelJumbotron' object.
      Aliases.browser.pageAwesomeShoppingStoreProducts.panelJumbotron.Click(342, 343);
      //Checks whether the 'contentText' property of the Aliases.browser.pageAwesomeShoppingStoreProducts.textnodeDisplay4 object contains KeywordTests.Test2.Variables.DataSource("textboxFirstName").
      aqObject.CheckProperty(Aliases.browser.pageAwesomeShoppingStoreProducts.textnodeDisplay4, "contentText", cmpContains, Project.Variables.DataSource.Value("textboxFirstName"), false);
      //Clicks the 'Logout (current)' item of the 'navbarAwesomeShoppingStore' bar.
      Aliases.browser.pageAwesomeShoppingStoreProducts.navbarAwesomeShoppingStore.ClickItem("Logout (current)");
      //Waits until the browser loads the page and is ready to accept user input.
      Aliases.browser.pageSignUpLoginForm.Wait();
      Project.Variables.DataSource.Next();
    }
    //Closes the browser page.
    Aliases.browser.pageSignUpLoginForm.Close();
  }
}