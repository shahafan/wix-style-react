webpackJsonp([414],{1543:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport GoogleAddressInputWithLabel from './GoogleAddressInputWithLabel';\nimport GoogleAddressInput from '../GoogleAddressInput';\nimport {GmapsTestClient} from '../GoogleAddressInput/GoogleAddressInput.spec';\nimport {textFieldTestkitFactory} from '../../testkit';\nimport {textFieldTestkitFactory as enzymeTextFieldTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\n\nconst props = {\n  Client: GmapsTestClient\n};\n\ndescribe('GoogleAddressInputWithLabel', () => {\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'compHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><GoogleAddressInputWithLabel dataHook={dataHook}><GoogleAddressInput {...props}/></GoogleAddressInputWithLabel></div>));\n      const textFieldTestkit = textFieldTestkitFactory({wrapper, dataHook});\n      expect(textFieldTestkit.exists()).toBeTruthy();\n    });\n\n    describe('enzyme testkit', () => {\n      it('should exist', () => {\n        const dataHook = 'myDataHook';\n        const wrapper = mount(<GoogleAddressInputWithLabel dataHook={dataHook}><GoogleAddressInput {...props}/></GoogleAddressInputWithLabel>);\n        const textFieldTestkit = enzymeTextFieldTestkitFactory({wrapper, dataHook});\n        expect(textFieldTestkit.exists()).toBeTruthy();\n      });\n    });\n  });\n});\n"}});