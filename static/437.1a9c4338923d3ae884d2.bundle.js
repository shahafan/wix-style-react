webpackJsonp([437],{1520:function(module,exports){module.exports='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport WixComponent from \'../../BaseComponents/WixComponent\';\nimport Input from \'../../Input\';\nimport Tooltip from \'../../Tooltip\';\nimport Button from \'../../Button\';\nimport {X, V} from \'../../Icons\';\nimport styles from \'../EditableSelector.scss\';\n\nclass EditableRow extends WixComponent {\n  static propTypes = {\n    newOption: PropTypes.string,\n    onApprove: PropTypes.func,\n    onCancel: PropTypes.func\n  };\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      newOption: props.newOption || \'\'\n    };\n  }\n\n  componentDidMount() {\n    super.componentDidMount();\n    this.input.focus();\n  }\n\n  onApprove = () => {\n    this.props.onApprove && this.props.onApprove(this.state.newOption);\n  };\n\n  onCancel = () => {\n    this.props.onCancel && this.props.onCancel();\n  };\n\n  render() {\n    return (\n      <div data-hook="edit-row-wrapper" className={styles.editableRowContainer}>\n        <div className={styles.editableRowInput}>\n          <Input\n            ref={input => this.input = input}\n            className={styles.editableRowInput}\n            dataHook="edit-row-input"\n            value={this.state.newOption}\n            onChange={event => this.setState({newOption: event.target.value})}\n            onEnterPressed={() => this.onApprove()}\n            onEscapePressed={() => this.onCancel()}\n            size="normal"\n            textOverflow="clip"\n            theme="normal"\n            width="initial"\n            />\n        </div>\n\n        <div className={styles.editableRowButtons}>\n          <Tooltip\n            content="Cancel"\n            shouldCloseOnClickOutside\n            theme="dark"\n            >\n            <Button onClick={() => this.onCancel()} height="medium" theme="icon-standardsecondary" dataHook="edit-row-cancel-button">\n              <X size="12px"/>\n            </Button>\n          </Tooltip>\n\n          <Tooltip\n            content="Confirm"\n            shouldCloseOnClickOutside\n            theme="dark"\n            >\n            <Button onClick={() => this.onApprove()} height="medium" theme="icon-standard" disabled={this.state.newOption.length === 0} dataHook="edit-row-approve-button">\n              <V size="12px"/>\n            </Button>\n          </Tooltip>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default EditableRow;\n'}});