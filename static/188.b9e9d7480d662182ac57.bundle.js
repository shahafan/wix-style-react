webpackJsonp([188],{1769:function(module,exports){module.exports="import sideMenuDriverFactory from '../core/SideMenu.driver';\nimport styles from './DrillView.scss';\n\nconst drillViewDriverFactory = ({element}) => {\n  const createMenuDriver = menuElement => sideMenuDriverFactory({element: menuElement});\n  const getMenu = () => element.querySelector('.' + styles.drillViewContainer);\n\n  return {\n    getMenuDriver: () => createMenuDriver(getMenu()),\n    getStickyFooter: () => element.querySelector('[data-hook=menu-footer]')\n  };\n};\n\nexport default drillViewDriverFactory;\n"}});