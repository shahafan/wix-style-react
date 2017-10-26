webpackJsonp([548],{1409:function(module,exports){module.exports="# Button Testkits\n\n> General Buttons\n\n## Button TestKit API\n\n| method | arguments | returned value | description |\n|--------|-----------|----------------|-------------|\n| getButtonTextContent | - | string | returns the button text |\n| isButtonDisabled | - | bool | fulfilled if button disabled |\n| isPrefixIconExists | - | bool | fulfilled if button prefix icon appeared |\n| isSuffixIconExists | - | bool | fulfilled if button suffix icon appeared |\n| click | - | - | clicks on the button |\n| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |\n| element (Only in E2E) | - | element | returns the driver element |\n\n## Usage Example\n\n> Unit Testing Example\n```javascript\n  import React from 'react';\n  import {buttonTestkitFactory} from 'wix-style-react/dist/testkit';\n  import {buttonTestkitFactory as enzymeButtonTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';\n\n  /***************\n   enzyme example\n  ***************/\n\n  const dataHook = 'myDataHook';\n  const wrapper = mount(<div/><Button dataHook={dataHook}/></div>);\n  const testkit = enzymeButtonTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(testkit.exists()).toBeTruthy();\n\n  /**********************\n   ReactTestUtils example\n  **********************/\n\n  const div = document.createElement('div');\n  const dataHook = 'myDataHook';\n  const wrapper = div.appendChild(\n    ReactTestUtils.renderIntoDocument(<div/><Button dataHook={dataHook}/></div>, {dataHook})\n  );\n  const testkit = buttonTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(testkit.exists()).toBeTruthy();\n```\n\n\n> E2E example\n```javascript\n  //Element should be rendered with a data-hook into the DOM\n  <Button dataHook='myDataHook'/>\n\n  /**********************\n   Protractor example\n  **********************/\n\n  import {buttonTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';\n\n  //Create an element testkit via the data-hook attribute\n  const testkit = buttonTestkitFactory({dataHook: 'myDataHook'});\n\n  browser.get(appUrl);  //Your application url\n\n  waitForVisibilityOf(testkit.element(), 'Cannot find Button')\n     .then(() => {\n       //Do tests\n        expect(testkit.element().isDisplayed()).toBeTruthy();\n     });\n```\n"}});