builder.selenium2.io.formats.push(builder.selenium2.io.createLangFormatter({
  name: "Robotframework",
  extension: "..txt",
  not: "not ",
  start:
    "Replace With Testname\n",
  end:
    "\n",
  lineForType: {
    "get":
      "  Go To  {url}\n",
    "goBack":
      "  Go Back\n",
    "goForward":
      "  #goForward is NOT IMPLEMENTED\n",
    "clickElement":
      "  Click Element  {locatorBy}={locator}\n",
    "setElementText":
      "  Input Text  {locatorBy}={locator}  {text}\n",
    "submitElement":
      "  Submit Form  {locatorBy}={locator}\n",
    "close":
      "  Close Browser",
    "verifyTextPresent":
      "  Page Should Contain  {text}\n" ,
    "assertTextPresent":
      "  Page Should Contain  {text}\n",
    "waitForTextPresent":
      "  Wait Until Page Contains  {text}",
    "verifyBodyText":
      "  Page Should Contain  {text}\n",
    "assertBodyText":
      "  Page Should Contain  {text}\n",
    "waitForBodyText":
      "  Wait Until Page Contains  {text}",
    "verifyElementPresent":
      "  Element Should Be Visible  {locatorBy}={locator}\n",
    "assertElementPresent":
      "  Element Should Be Visible  {locatorBy}={locator}\n",
    "waitForElementPresent":
      "  Wait Until Element Is Visible  {locatorBy}={locator}",
    "verifyPageSource":
      "  #verifyPageSource is NOT IMPLEMENTED\n",
    "assertPageSource":
      "  #assertPageSource is NOT IMPLEMENTED\n",
    "waitForPageSource":
      "  #waitForPageSource is NOT IMPLEMENTED\n",
    "verifyText":
      "  Element Text Should Be  {text}\n",
    "assertText":
      "  Element Text Should Be  {text}\n",
    "waitForText":
      "  Wait Until Page Contains  {text}",
    "verifyCurrentUrl":
      "  #verifyCurrentUrl is NOT IMPLEMENTED\n",
    "assertCurrentUrl":
      "  #assertCurrentUrl is NOT IMPLEMENTED\n",
    "waitForCurrentUrl":
      "  #waitForCurrentUrl is NOT IMPLEMENTED\n",
    "verifyTitle":
      "  Title Should Be  {title}\n",
    "assertTitle":
      "  Title Should Be  {title}\n",
    "waitForTitle":
      "  #waitForTitle is NOT IMPLEMENTED\n",
    "verifyElementValue":
      "  Element Should Contain  {locatorBy}={locator}  {value}\n",
    "assertElementValue":
      "  Element Should Contain  {locatorBy}={locator}  {value}\n",
    "element.waitForValue":
      "  Wait Until Element Contains  {locatorBy}={locator}  {value}",
    "mouseOverElement":
      "  Mouse Over  {locatorBy}={locator}\n",
    "sendKeysToElement":
      "  #sendKeysToElement is NOT IMPLEMENTED\n",
    "clearSelections":
      "  #clearSelections is NOT IMPLEMENTED\n",
    "dragToAndDropElement":
      "  Drag And Drop {locator}  {targetLocator}\n",
    "clickAndHoldElement":
      "  #clickAndHoldElement is NOT IMPLEMENTED\n",
    "releaseElement":
      "  #releaseElement is NOT IMPLEMENTED\n",
    "saveScreenshot":
      "  Capture Page Screenshot  {file}\n",
    "print":
      "  #print is NOT IMPLEMENTED\n",
    "refresh":
      "  Reload Page\n",

//     "setElementSelected":
//       "- Select {locatorBy} \"{locator}\"\n",
//     "setElementNotSelected":
//       "- Deselect {locatorBy} \"{locator}\"\n",
//     "verifyElementSelected":
//       "- Make sure {locatorBy} \"{locator}\" is {negNot}selected\n",
//     "assertElementSelected":
//       "- If {locatorBy} \"{locator}\" is {posNot}selected, scream at the coders\n",
//     "waitForElementSelected":
//       "- Wait until {locatorBy} \"{locator}\" is {negNot}selected\n",
//     "verifyElementValue":
//       "- Make sure {locatorBy} \"{locator}\" has a value which is {negNot}\"{value}\"\n",
//     "assertElementValue":
//       "- If {locatorBy} \"{locator}\" has a value which is {posNot}\"{value}\", scream at the coders\n",
//     "waitForElementValue":
//       "- Wait until the value of {locatorBy} \"{locator}\" is {negNot}\"{value}\"\n",
//     "verifyElementAttribute":
//       "- Make sure {locatorBy} \"{locator}\" has a \"{attributeName}\" attribute which is {negNot}\"{value}\"\n",
//     "assertElementAttribute":
//       "- If {locatorBy} \"{locator}\" has a \"{attributeName}\" attribute which is {posNot}{value}, scream at the coders\n",
//     "waitForElementAttribute":
//       "- Wait until the \"{attributeName}\" attribute of {locatorBy} \"{locator}\" is {negNot}\"{value}\"\n",
//     "addCookie":
//       "- You're supposed to add a cookie called \"{name}\" with the value of \"{value}\", but that's hard since you're not a computer. I suggest baking a batch of real cookies instead.\n",
//     "deleteCookie":
//       "- You're supposed to delete a cookie called \"{name}\", but that's hard since you're not a computer. I suggest making a real cookie disappear instead.\n",
//     "verifyCookieByName":
//       "- Check the cookie whose name is \"{name}\". Make sure its value is {negNot}\"{value}\"\n",
//     "assertCookieByName":
//       "- Check the cookie whose name is \"{name}\". If its value is {posNot}\"{value}\", scream at the coders\n",
//     "waitForCookieByName":
//       "- Wait until the value of the cookie called \"{name}\" is {negNot}\"{value}\"\n",
//     "verifyCookiePresent":
//       "- Make sure there is {negNot}a cookie whose name is \"{name}\"\n",
//     "assertCookiePresent":
//       "- If there is {posNot}a cookie whose name is \"{name\"}, scream at the coders\n",
//     "waitForCookiePresent":
//       "- Wait until the cookie called \"{name}\" is {negNot}present\n",


    "store":
      "  #store is NOT IMPLEMENTED\n",
    "storeCurrentUrl":
      "  #storeCurrentUrl is NOT IMPLEMENTED\n",
    "storeTitle":
      "  #storeTitle is NOT IMPLEMENTED\n",
    "storeText":
      "  #storeText is NOT IMPLEMENTED\n",
    "storeTextPresent":
      "  #storeTextPresent is NOT IMPLEMENTED\n",
    "storeBodyText":
      "  #storeBodyText is NOT IMPLEMENTED\n",
    "storePageSource":
      "  #storePageSource is NOT IMPLEMENTED\n",
    "storeElementSelected":
      "  #storeElementSelected is NOT IMPLEMENTED\n",
    "storeElementAttribute":
      "  #storeElementAttribute is NOT IMPLEMENTED\n",
    "storeElementValue":
      "  #storeElementValue is NOT IMPLEMENTED\n",
    "storeCookiePresent":
      "  #storeCookiePresent is NOT IMPLEMENTED\n",
    "storeCookieByName":
      "  #storeCookieByName is NOT IMPLEMENTED\n"
  },
  locatorByForType: function(stepType, locatorType, locatorIndex) {
    if ({
      "assertElementPresent": 1,
      "verifyElementPresent": 1
    }[stepType.name]) {
      return {
        "class": "class",
        "id": "id",
        "link text": "link",
        "xpath": "xpath",
        "css selector": "css",
        "name": "name"}[locatorType];
    }
    return {
      "class": "class",
      "id": "id",
      "link text": "link",
      "xpath": "xpath",
      "css selector": "css",
      "name": "name"}[locatorType];
  },
  escapeValue: function(stepType, value, pName) {
    return value;
  },
  usedVar: function(varName) { return "${" + varName + "}"; },
  unusedVar: function(varName) { return "${" + varName + "}"; }
}));



if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }