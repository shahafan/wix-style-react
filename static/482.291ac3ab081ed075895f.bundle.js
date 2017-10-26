webpackJsonp([482],{1475:function(module,exports){module.exports="# Checkbox Testkits\n\n> Checkbox\n\n## Checkbox TestKit API\n\n| method | arguments | returned value | description |\n|--------|-----------|----------------|-------------|\n| getInput | - | element | returns checkbox input element |\n| getLabel | - | element | returns checkbox label element |\n| isChecked | - | bool | fulfilled if element has class '.checked' |\n| isDisabled | - | bool | fulfilled if element has class '.disabled' |\n| isIndeterminate | - | bool | fulfilled if element has class '.indeterminate' |\n| click | - | - | clicks on the checkbox |\n| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |\n| element (Only in E2E) | - | element | returns the driver element |\n\n## Usage Example\n\n> Unit testing example\n\n```javascript\n  import React from 'react';\n  import {checkboxTestkitFactory} from 'wix-style-react/dist/testkit';\n  import {checkboxTestkitFactory as enzymeCheckboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';\n\n  /***************\n   enzyme example\n  ***************/\n\n  const dataHook = 'myDataHook';\n  const wrapper = mount(<div/><Checkbox dataHook={dataHook}/></div>);\n  const testkit = enzymeCheckboxTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(testkit.exists()).toBeTruthy();\n\n  /**********************\n   ReactTestUtils example\n  **********************/\n\n  const div = document.createElement('div');\n  const dataHook = 'myDataHook';\n  const wrapper = div.appendChild(\n    ReactTestUtils.renderIntoDocument(<div/><Checkbox dataHook={dataHook}/></div>, {dataHook})\n  );\n  const testkit = checkboxTestkitFactory({wrapper, dataHook});\n\n  //Do tests\n  expect(testkit.exists()).toBeTruthy();\n```\n> E2E example\n\n```javascript\n  //Element should be rendered with a data-hook into the DOM\n  <Checkbox dataHook='myDataHook'/>\n\n  /*******************\n   protractor example\n  *******************/\n\n  import {checkboxTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';\n\n  //Create an element testkit via the data-hook attribute\n  const testkit = checkboxTestkitFactory({dataHook: 'myDataHook'});\n\n  browser.get(appUrl); //Your application url\n\n  waitForVisibilityOf(testkit.element(), 'Cannot find Checkbox')\n     .then(() => {\n        //Do tests\n        expect(testkit.element().isDisplayed()).toBeTruthy();\n     });\n```\n"}});