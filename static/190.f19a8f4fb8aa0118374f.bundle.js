webpackJsonp([190],{1767:function(module,exports){module.exports="import redStyle from './MenuRed.scss';\nimport blueStyle from './MenuBlue.scss';\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classnames from 'classnames';\n\nconst findChildIndex = (children, selectedId) => {\n  for (let i = 0; i < children.length; i++) {\n    if (children[i].id === selectedId) {\n      return i;\n    }\n  }\n\n  return -1;\n};\n\nclass Menu extends React.Component {\n\n  getCss() {\n    if (this.props.selectedColor && this.props.selectedColor === 'blue') {\n      return blueStyle;\n    } else {\n      return redStyle;\n    }\n  }\n\n  render() {\n    const {items, selectedId, onSelect = () => {}} = this.props;\n\n    return (\n      <div>\n        {items.map(item => this._renderItem({item, selectedId, onSelect}))}\n      </div>\n    );\n  }\n\n  _renderItem({item, selectedId, onSelect}) {\n    if (item.children) {\n      return this._renderGroup({item, selectedId, onSelect});\n    } else {\n      return this._renderSelection({item, selectedId, onSelect});\n    }\n  }\n\n  _renderGroup({item, selectedId, onSelect}) {\n\n    const {title, children, id} = item;\n\n    const selectedChild = findChildIndex([...children], selectedId);\n    const selected = selectedId === id || selectedChild > -1;\n\n    const height = !selected ? 0 : ((children.length * 48) - 18);  /* 48 is item height, 18 is last item margin */\n    const top = !selected ? 0 : (selectedChild * 42) || 0;\n\n    const cn = classnames({\n      [this.getCss().group]: selected\n    });\n\n    const titleCn = classnames({\n      [this.getCss().grouptitle]: selected,\n      [this.getCss().title]: !selected\n    });\n\n    return (\n      <div className={cn} key={id}>\n        <div className={titleCn} onClick={() => onSelect(id)} >\n          {title}\n        </div>\n        <div className={this.getCss().groupitems} style={{height}} >\n          <div className={this.getCss().groupmask} style={{top}}/>\n          {children.map(item => {\n            return this._renderSelection({item, selectedId, onSelect});\n          })}\n        </div>\n      </div>\n    );\n  }\n\n  _renderSelection({item, selectedId, onSelect}) {\n\n    const {title, id} = item;\n\n    const cn = classnames({\n      [this.getCss().title]: true,\n      [this.getCss().selected]: id === selectedId\n    });\n\n    return (\n      <div className={cn} key={id} onClick={() => onSelect(id)} >\n        {title}\n      </div>\n    );\n  }\n\n  static propTypes = {\n    items: PropTypes.array.isRequired,\n    onSelect: PropTypes.func.isRequired,\n    selectedId: PropTypes.any,\n    selectedColor: PropTypes.string\n  }\n\n  static displayName = 'SideBar.Menu'\n\n}\n\nexport default Menu;\n"}});