webpackJsonp([119],{1838:function(module,exports){module.exports="# ToggleSwitch Testkits\n\n## ToggleSwitch Unit TestKit API\n\n| method | arguments | returned value | description |\n|--------|-----------|----------------|-------------|\n| isDisabled | - | bool | fulfilled if element is disabled |\n| click | - | - | click on the ToggleSwitch |\n| isChecked | - | bool | Returns 'checked' value of the ToggleSwitch |\n| isXSmall | - | bool | Returns true if the ToggleSwitch is x-small |\n| isSmall | - | bool | Returns true if the ToggleSwitch is small |\n| isLarge | - | bool | Returns true if the ToggleSwitch is large |\n| exists | - | driver | return true if the ToggleSwitch is exists |\n\n### Usage Example\n\n```javascript\n  import React from 'react';\n  import {toggleSwitchTestkitFactory} from 'wix-style-react/dist/testkit';\n  import {toggleSwitchTestkitFactory as enzymeToggleSwitchTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';\n\n  /***************\n   enzyme example\n  ***************/\n\n  const dataHook = 'myDataHook';\n  const wrapper = mount(<div/><ToggleSwitch dataHook={dataHook}/></div>);\n  const driver = enzymeToggleSwtichTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(driver.exists()).toBeTruthy();\n\n  /**********************\n   ReactTestUtils example\n  **********************/\n\n  const div = document.createElement('div');\n  const dataHook = 'myDataHook';\n  const wrapper = div.appendChild(\n    ReactTestUtils.renderIntoDocument(<div/><ToggleSwitch dataHook={dataHook}/></div>, {dataHook})\n  );\n  const driver = toggleSwitchTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(driver.exists()).toBeTruthy();\n```\n\n## ToggleSwitch E2E TestKit API\n\n| method | arguments | returned value | description |\n|--------|-----------|----------------|-------------|\n| element | - | element | Returns the ToggleSwitch element |\n| click | - | - | Toggles the switch |\n| checked | - | bool | Returns true if ToggleSwitch is checked |\n| isXSmall | - | bool | Returns true if ToggleSwitch is x-small |\n| isSmall | - | bool | Returns true if ToggleSwitch is small |\n| isLarge | - | bool | Returns true if ToggleSwitch is large |\n\n\n### Usage Example\n\n```javascript\n  //Element should be rendered with a data-hook into the DOM\n  <ToggleSwitch dataHook='myDataHook'/>\n\n  /*******************\n   protractor example\n  *******************/\n\n  import {toggleSwitchTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';\n\n  //Create an element testkit via the data-hook attribute\n  const testkit = toggleSwitchTestkitFactory({dataHook: 'myDataHook'});\n\n  browser.get(appUrl); //Your application url\n\n  waitForVisibilityOf(testkit.element(), 'Cannot find ToggleSwitch')\n     .then(() => {\n        //Do tests\n        expect(testkit.element().isDisplayed()).toBeTruthy();\n     });\n```\n"}});