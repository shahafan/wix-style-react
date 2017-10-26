webpackJsonp([165],{1792:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport Badge from './Badge';\nimport {tpaBadgeTestkitFactory as badgeTestkitFactory} from '../../../testkit';\n\ndescribe('Badge', () => {\n\n  it('should render a badge', () => {\n    const div = document.createElement('div');\n    const dataHook = 'badge-hook';\n    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n      <div><Badge dataHook={dataHook}>Hi</Badge></div>\n    ));\n    const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n    expect(badgeTestkit.text()).toEqual('Hi');\n  });\n\n  it('should allow specifying a alignment', () => {\n    const div = document.createElement('div');\n    const dataHook = 'badge-hook';\n    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n      <div><Badge alignment=\"top\" dataHook={dataHook}>Hi</Badge></div>\n    ));\n    const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n    expect(badgeTestkit.hasClass('top')).toBeTruthy();\n  });\n\n  describe('should be able to apply the default/base css classes', () => {\n    it('primary top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"primary\" alignment=\"top\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('primary')).toBeTruthy();\n      expect(badgeTestkit.isOfType('top')).toBeTruthy();\n    });\n    it('warning bottom', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"warning\" alignment=\"bottom\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('warning')).toBeTruthy();\n      expect(badgeTestkit.isOfType('bottom')).toBeTruthy();\n    });\n    it('info middle', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"info\" alignment=\"middle\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('info')).toBeTruthy();\n      expect(badgeTestkit.isOfType('middle')).toBeTruthy();\n    });\n    it('danger top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"danger\" alignment=\"top\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('danger')).toBeTruthy();\n      expect(badgeTestkit.isOfType('top')).toBeTruthy();\n    });\n    it('success top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"success\" alignment=\"top\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('success')).toBeTruthy();\n      expect(badgeTestkit.isOfType('top')).toBeTruthy();\n    });\n    it('default top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge type=\"default\" alignment=\"top\" dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('default')).toBeTruthy();\n      expect(badgeTestkit.isOfType('top')).toBeTruthy();\n    });\n\n    it('defaults', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge dataHook={dataHook}>Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.isOfType('default')).toBeTruthy();\n      expect(badgeTestkit.isOfType('middle')).toBeTruthy();\n    });\n  });\n\n  describe('should be able to apply all the css classes by user', () => {\n    it('primary and alignment top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div>\n          <Badge\n            alignment=\"top\"\n            type=\"primary\"\n            primaryClassName=\"primaryCustomClassName\"\n            warningClassName=\"warningCustomClassName\"\n            defaultClassName=\"defaultCustomClassName\"\n            successClassName=\"successCustomClassName\"\n            dangerClassName=\"dangerCustomClassName\"\n            infoClassName=\"infoCustomClassName\"\n            alignmentTopClassName=\"alignmentTopCustomClassName\"\n            alignmentBottomClassName=\"alignmentBottomCustomClassName\"\n            alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n            dataHook={dataHook}\n            >Hi</Badge>\n        </div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('primaryCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentTopCustomClassName')).toBeTruthy();\n    });\n    it('warning and middle', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge\n          alignment=\"middle\"\n          type=\"warning\"\n          primaryClassName=\"primaryCustomClassName\"\n          warningClassName=\"warningCustomClassName\"\n          defaultClassName=\"defaultCustomClassName\"\n          successClassName=\"successCustomClassName\"\n          dangerClassName=\"dangerCustomClassName\"\n          infoClassName=\"infoCustomClassName\"\n          alignmentTopClassName=\"alignmentTopCustomClassName\"\n          alignmentBottomClassName=\"alignmentBottomCustomClassName\"\n          alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n          dataHook={dataHook}\n          >Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('warningCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentMiddleCustomClassName')).toBeTruthy();\n    });\n    it('info and bottom', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge\n          alignment=\"bottom\"\n          type=\"info\"\n          primaryClassName=\"primaryCustomClassName\"\n          warningClassName=\"warningCustomClassName\"\n          defaultClassName=\"defaultCustomClassName\"\n          successClassName=\"successCustomClassName\"\n          dangerClassName=\"dangerCustomClassName\"\n          infoClassName=\"infoCustomClassName\"\n          alignmentTopClassName=\"alignmentTopCustomClassName\"\n          alignmentBottomClassName=\"alignmentBottomCustomClassName\"\n          alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n          dataHook={dataHook}\n          >Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('infoCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentBottomCustomClassName')).toBeTruthy();\n    });\n    it('danger and top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge\n          alignment=\"top\"\n          type=\"danger\"\n          primaryClassName=\"primaryCustomClassName\"\n          warningClassName=\"warningCustomClassName\"\n          defaultClassName=\"defaultCustomClassName\"\n          successClassName=\"successCustomClassName\"\n          dangerClassName=\"dangerCustomClassName\"\n          infoClassName=\"infoCustomClassName\"\n          alignmentTopClassName=\"alignmentTopCustomClassName\"\n          alignmentBottomClassName=\"alignmentBottomCustomClassName\"\n          alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n          dataHook={dataHook}\n          >Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('dangerCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentTopCustomClassName')).toBeTruthy();\n    });\n    it('success and top', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge\n          alignment=\"top\"\n          type=\"success\"\n          primaryClassName=\"primaryCustomClassName\"\n          warningClassName=\"warningCustomClassName\"\n          defaultClassName=\"defaultCustomClassName\"\n          successClassName=\"successCustomClassName\"\n          dangerClassName=\"dangerCustomClassName\"\n          infoClassName=\"infoCustomClassName\"\n          alignmentTopClassName=\"alignmentTopCustomClassName\"\n          alignmentBottomClassName=\"alignmentBottomCustomClassName\"\n          alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n          dataHook={dataHook}\n          >Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('successCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentTopCustomClassName')).toBeTruthy();\n    });\n    it('should have defaults', () => {\n      const div = document.createElement('div');\n      const dataHook = 'badge-hook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(\n        <div><Badge\n          alignmentMiddleClassName=\"alignmentMiddleCustomClassName\"\n          defaultClassName=\"defaultCustomClassName\"\n          dataHook={dataHook}\n          >Hi</Badge></div>\n      ));\n      const badgeTestkit = badgeTestkitFactory({wrapper, dataHook});\n      expect(badgeTestkit.hasClass('defaultCustomClassName')).toBeTruthy();\n      expect(badgeTestkit.hasClass('alignmentMiddleCustomClassName')).toBeTruthy();\n    });\n  });\n\n});\n"}});