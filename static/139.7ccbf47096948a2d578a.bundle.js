webpackJsonp([139],{1818:function(module,exports){module.exports="import React from 'react';\nimport {mount} from 'enzyme';\nimport tpaStyleInjector from './TpaStyleInjector';\n\nconst DummyComponent = () => <div>Dummy Component</div>;\nDummyComponent.displayName = 'DummyComponent';\n\nconst DummyComponent2 = () => <div>Dummy Component 2</div>;\nDummyComponent2.displayName = 'DummyComponent2';\n\nconst DummyComponentWithoutDisplayName = () => <div>Dummy Component</div>;\n\nconst MockStyle = function () {};\nMockStyle.prototype.toString = () => '.a { background-color: red; }';\nconst mockStyle = new MockStyle();\n\nconst WiredMockStyle = function () {};\nWiredMockStyle.prototype.toString = () => '.a { background-color: \"{{ color-1 }}\"; }';\nconst wiredMockStyle = new WiredMockStyle();\n\nconst head = document.head;\n\ndescribe('TpaStyleInjector', () => {\n  it('Should render wrapped component', () => {\n    const Component = tpaStyleInjector(DummyComponent);\n    const wrapper = mount(<Component/>);\n    expect(wrapper.html()).toBe('<div>Dummy Component</div>');\n  });\n\n  it('Should throw when component missing displayName', () => {\n    expect(() => tpaStyleInjector(DummyComponentWithoutDisplayName)).toThrow('Component must have a displayName');\n  });\n\n  describe('Stylesheet injection', () => {\n    beforeEach(() => {\n      const Component = tpaStyleInjector(DummyComponent, mockStyle);\n      mount(<Component/>);\n    });\n\n    afterEach(() => {\n      Array.from(head.children)\n        .forEach(element => element.remove());\n    });\n\n    it('Should inject stylesheet', () => {\n      expect(head.firstChild.tagName).toBe('STYLE');\n    });\n\n    it('Should set attribute wix-style to element', () => {\n      expect(head.firstChild.getAttribute('wix-style')).toBe('');\n    });\n\n    it('Should set attribute wix-style-react-[Component.displayName] to element', () => {\n      expect(head.firstChild.getAttribute('wix-style-react-DummyComponent')).toBeTruthy();\n    });\n\n    it('Should inject stylesheet contents', () => {\n      expect(head.firstChild.innerText).toBe(mockStyle.toString());\n    });\n  });\n\n  describe('Idempotent stylesheet', () => {\n    const Component = tpaStyleInjector(DummyComponent, mockStyle);\n\n    beforeEach(() => {\n      mount(<Component/>);\n    });\n\n    afterAll(() => {\n      Array.from(head.children)\n        .forEach(element => element.remove());\n    });\n\n    it('Should inject stylesheet on first rendering', () => {\n      expect(head.children.length).toBe(1);\n    });\n\n    it('Should not inject after the second rendering', () => {\n      expect(head.children.length).toBe(1);\n    });\n\n  });\n\n  describe('Stylesheet injection - more than one component', () => {\n    beforeEach(() => {\n      const Component1 = tpaStyleInjector(DummyComponent, mockStyle);\n      const Component2 = tpaStyleInjector(DummyComponent2, mockStyle);\n      mount(<Component1/>);\n      mount(<Component2/>);\n    });\n\n    afterAll(() => {\n      Array.from(head.children)\n        .forEach(element => element.remove());\n    });\n\n    it('Should inject correct attributes', () => {\n      expect(head.firstChild.getAttribute('wix-style-react-DummyComponent2')).toBeTruthy();\n      expect(head.children[1].getAttribute('wix-style-react-DummyComponent')).toBeTruthy();\n    });\n\n    it('Should keep stylesheets from duplications', () => {\n      expect(head.children.length).toBe(2);\n    });\n  });\n\n  describe('Wired styling', () => {\n    const Component = tpaStyleInjector(DummyComponent, wiredMockStyle);\n\n    beforeEach(() => {\n      mount(<Component/>);\n    });\n\n    afterAll(() => {\n      Array.from(head.children)\n        .forEach(element => element.remove());\n    });\n\n    it('Should remove quotes from wired styles', () => {\n      expect(head.firstChild.innerText).toBe('.a { background-color: {{ color-1 }}; }');\n    });\n  });\n});\n"}});