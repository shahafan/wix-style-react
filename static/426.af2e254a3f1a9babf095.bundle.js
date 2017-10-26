webpackJsonp([426],{1531:function(module,exports){module.exports="import React from 'react';\nimport fieldLabelAttributesDriverFactory from './FieldLabelAttributes.driver';\nimport {createDriverFactory} from '../test-common';\nimport FieldLabelAttributes from './FieldLabelAttributes';\n\ndescribe('FieldLabelAttributes', () => {\n\n  const createDriver = createDriverFactory(fieldLabelAttributesDriverFactory);\n\n  describe('required', () => {\n    it('should not exist by default', () => {\n      const driver = createDriver(<FieldLabelAttributes/>);\n      expect(driver.hasRequired()).toBe(false);\n    });\n\n    it('should exist', () => {\n      const driver = createDriver(<FieldLabelAttributes required/>);\n      expect(driver.hasRequired()).toBe(true);\n    });\n  });\n\n  describe('info', () => {\n    it('should not exist by default', () => {\n      const driver = createDriver(<FieldLabelAttributes/>);\n      expect(driver.hasInfo()).toBe(false);\n    });\n\n    it('should exist', () => {\n      const driver = createDriver(<FieldLabelAttributes info=\"help me bla bla\"/>);\n      expect(driver.hasInfo()).toBe(true);\n    });\n  });\n\n});\n"}});