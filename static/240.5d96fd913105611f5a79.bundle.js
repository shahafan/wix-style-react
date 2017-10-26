webpackJsonp([240],{1717:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport InputWithOptions from '../InputWithOptions/InputWithOptions';\nimport InputWithTags from './InputWithTags';\nimport last from 'lodash/last';\nimport difference from 'difference';\nimport uniqueId from 'lodash/uniqueId';\n\nclass MultiSelect extends InputWithOptions {\n  constructor(props) {\n    super(props);\n    this.onKeyDown = this.onKeyDown.bind(this);\n    this.onPaste = this.onPaste.bind(this);\n    this.state = {pasteDetected: false};\n\n    if (props.maxHeight) {\n      console.warn('MultiSelect: maxHeight is deprecated, please use maxNumRows instead. maxHeight will not be supported starting from 03/12/2017');\n    }\n  }\n\n  getUnselectedOptions() {\n    const optionIds = this.props.options.map(option => option.id);\n    const tagIds = this.props.tags.map(tag => tag.id);\n    const unselectedOptionsIds = difference(optionIds, tagIds);\n    return this.props.options.filter(option => unselectedOptionsIds.includes(option.id));\n  }\n\n  dropdownAdditionalProps() {\n    return {\n      options: this.getUnselectedOptions().filter(this.props.predicate),\n      closeOnSelect: false\n    };\n  }\n\n  closeOnSelect() {\n    return false;\n  }\n\n  inputAdditionalProps() {\n    return {\n      inputElement: <InputWithTags maxHeight={this.props.maxHeight} maxNumRows={this.props.maxNumRows}/>,\n      onKeyDown: this.onKeyDown,\n      delimiters: this.props.delimiters,\n      onPaste: this.onPaste\n    };\n  }\n\n  onPaste() {\n    this.setState({pasteDetected: true});\n  }\n\n  _onChange(event) {\n    if (!this.state.pasteDetected) {\n      this.setState({inputValue: event.target.value});\n      this.props.onChange && this.props.onChange(event);\n    } else {\n      const delimitersRegexp = new RegExp(this.props.delimiters.join('|'), 'g');\n      const value = event.target.value.replace(delimitersRegexp, ',');\n      const tags = value.split(',').map(str => str.trim()).filter(str => str);\n\n      this.clearInput();\n      this.setState({pasteDetected: false});\n\n      const suggestedOptions = tags\n        .map(tag => {\n          const tagObj = this.getUnselectedOptions().find(element => this.props.valueParser(element).toLowerCase() === tag.toLowerCase());\n          return tagObj ? tagObj : {id: uniqueId('customOption_'), value: tag, theme: 'error'};\n        });\n\n      this.onSelect(suggestedOptions);\n    }\n  }\n\n\n  _onSelect(option) {\n    this.onSelect([option]);\n  }\n\n  _onManuallyInput(inputValue) {\n    if (inputValue) {\n      inputValue = inputValue.trim();\n      if (this.closeOnSelect()) {\n        this.hideOptions();\n      }\n\n      this.onManuallyInput(inputValue);\n    } else {\n      super.hideOptions();\n    }\n    this.clearInput();\n  }\n\n  onKeyDown(event) {\n    const {tags, value, onRemoveTag, delimiters} = this.props;\n\n    if (tags.length > 0 && (event.key === 'Delete' || event.key === 'Backspace') && value.length === 0) {\n      onRemoveTag(last(tags).id);\n    }\n\n    if (event.key === 'Escape') {\n      this.clearInput();\n      super.hideOptions();\n    }\n\n    if (event.key === 'Enter' || event.key === 'Tab' || delimiters.includes(event.key)) {\n      if (this.props.value.trim()) {\n        this._onManuallyInput(this.state.inputValue);\n        const unselectedOptions = this.getUnselectedOptions();\n        const visibleOptions = unselectedOptions.filter(this.props.predicate);\n        const maybeNearestOption = visibleOptions[0];\n\n        if (maybeNearestOption) {\n          this.onSelect([maybeNearestOption]);\n        }\n\n        this.clearInput();\n      }\n    }\n\n    if (this.props.onKeyDown) {\n      this.props.onKeyDown(event);\n    }\n  }\n\n  optionToTag({id, value, tag, theme}) {\n    return tag ? {id, ...tag} : {id, label: value, theme};\n  }\n\n  onSelect(options) {\n    this.clearInput();\n\n    if (this.props.onSelect) {\n      options = options.map(this.optionToTag);\n      this.props.onSelect(options);\n    }\n\n    this.input.focus();\n  }\n\n  onManuallyInput(inputValue) {\n    if (!inputValue) {\n      this.input.blur();\n      return;\n    }\n\n    if (this.props.onManuallyInput) {\n      this.props.onManuallyInput(inputValue, this.optionToTag({id: uniqueId('customOption_'), value: inputValue}));\n    }\n\n    this.clearInput();\n  }\n\n  clearInput() {\n    this.input.clear();\n    if (this.props.onChange) {\n      this.props.onChange({target: {value: ''}});\n    }\n  }\n}\n\nMultiSelect.propTypes = {\n  ...InputWithOptions.propTypes,\n  predicate: PropTypes.func,\n  tags: PropTypes.array,\n  maxHeight: PropTypes.string,\n  maxNumRows: PropTypes.number,\n  delimiters: PropTypes.array\n};\n\nMultiSelect.defaultProps = {\n  ...InputWithOptions.defaultProps,\n  predicate: () => true,\n  tags: [],\n  delimiters: [',']\n};\n\nexport default MultiSelect;\n"}});