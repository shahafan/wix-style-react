webpackJsonp([270],{1687:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport languagePickerDriverFactory from './LanguagePicker.driver';\nimport LanguagePicker from './LanguagePicker';\nimport {createDriverFactory} from '../test-common';\nimport {languagePickerTestkitFactory} from '../../testkit';\nimport {languagePickerTestkitFactory as enzymeLanguagePickerTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\nimport sinon from 'sinon';\n\ndescribe('LanguagePicker', () => {\n  const createDriver = createDriverFactory(languagePickerDriverFactory);\n\n  const languagePicker = (props = {}) => (\n    <LanguagePicker {...props}>\n      <LanguagePicker.Option languageKey=\"en\">English</LanguagePicker.Option>\n      <LanguagePicker.Option languageKey=\"fr\">French</LanguagePicker.Option>\n    </LanguagePicker>\n  );\n\n  it('should have big items height by default', () => {\n    const {dropdownLayoutDriver} = createDriver(languagePicker());\n    expect(dropdownLayoutDriver.isOptionHeightBig(0)).toBe(true);\n  });\n\n  it('should call onSelect prop when language is selected', () => {\n    const onSelect = jest.fn();\n    const {driver, dropdownLayoutDriver} = createDriver(languagePicker({onSelect}));\n\n    driver.mouseEnter();\n    dropdownLayoutDriver.clickAtOption(0);\n\n    expect(onSelect).toBeCalledWith({id: 'en', value: 'English'});\n  });\n\n  it('should print console warning for bad children format', () => {\n    const badLanguagePicker = (props = {}) => (\n      <LanguagePicker {...props}>\n        <div languageKey=\"en\">English</div>\n        <LanguagePicker.Option languageKey=\"fr\">French</LanguagePicker.Option>\n      </LanguagePicker>\n    );\n\n    const stub = sinon.stub(console, 'error');\n\n    createDriver(badLanguagePicker());\n\n    expect(stub.calledWithMatch(`Invalid Prop children was given. Validation failed on child number 0`)).toBeTruthy();\n  });\n\n  it('should have a divider between every language', () => {\n    const {dropdownLayoutDriver} = createDriver(languagePicker());\n    expect(dropdownLayoutDriver.optionsLength()).toBe(3);\n    expect(dropdownLayoutDriver.isOptionADivider(1)).toBe(true);\n  });\n\n  it('should not display the selected language in the dropdown', () => {\n    const {dropdownLayoutDriver} = createDriver(languagePicker({selectedId: 'en'}));\n    expect(dropdownLayoutDriver.optionsLength()).toBe(1);\n    expect(dropdownLayoutDriver.optionContentAt(0)).toBe('French');\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'myDataHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{languagePicker({dataHook})}</div>));\n      const languagePickerTestkit = languagePickerTestkitFactory({wrapper, dataHook});\n      expect(languagePickerTestkit.driver.exists()).toBeTruthy();\n      expect(languagePickerTestkit.dropdownLayoutDriver.exists()).toBeTruthy();\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(languagePicker({dataHook}));\n      const languagePickerTestkit = enzymeLanguagePickerTestkitFactory({wrapper, dataHook});\n      expect(languagePickerTestkit.driver.exists()).toBeTruthy();\n      expect(languagePickerTestkit.dropdownLayoutDriver.exists()).toBeTruthy();\n    });\n  });\n});\n"}});