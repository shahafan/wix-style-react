webpackJsonp([554],{1403:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport AutoCompleteComposite from './AutoCompleteComposite';\nimport AutoComplete from '../AutoComplete/AutoComplete';\nimport {autoCompleteCompositeTestkitFactory} from '../../testkit';\nimport {autoCompleteCompositeTestkitFactory as enzymeTextAreaTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\n\ndescribe('AutoCompleteComposite', () => {\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'compHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><AutoCompleteComposite dataHook={dataHook}><AutoComplete/></AutoCompleteComposite></div>));\n      const autoCompleteCompositeTestkit = autoCompleteCompositeTestkitFactory({wrapper, dataHook});\n      expect(autoCompleteCompositeTestkit.exists()).toBeTruthy();\n    });\n\n    describe('enzyme testkit', () => {\n      it('should exist', () => {\n        const dataHook = 'myDataHook';\n        const wrapper = mount(<AutoCompleteComposite dataHook={dataHook}><AutoComplete/></AutoCompleteComposite>);\n        const autoCompleteCompositeTestkit = enzymeTextAreaTestkitFactory({wrapper, dataHook});\n        expect(autoCompleteCompositeTestkit.exists()).toBeTruthy();\n      });\n    });\n  });\n});\n"}});