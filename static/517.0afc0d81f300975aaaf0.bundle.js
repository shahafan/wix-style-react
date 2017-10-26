webpackJsonp([517],{1440:function(module,exports){module.exports="import styles from './Breadcrumbs.scss';\n\nconst breadcrumbsDriverFactory = component => {\n  const hasClass = className => component.getAttribute('class')\n    .then(classes => classes.split('__').indexOf(className) !== -1);\n\n  return {\n    breadcrumbContentAt: position => component.all(by.xpath('./div')).get(position).getText(),\n    clickBreadcrumbAt: position => component.$$('[data-hook=\"breadcrumb-clickable\"]').get(position).click(),\n    getActiveItemId: () => component.all(by.xpath('./div')).getAttribute('class')\n      .then(classes => {\n        const activeItems = classes.map(cls => cls.split(' ').some(c => styles.active === c));\n        return activeItems.indexOf(true);\n      }),\n    isLarge: () => hasClass('large'),\n    isMedium: () => hasClass('medium'),\n    isOnWhiteBackground: () => hasClass('onWhiteBackground'),\n    isOnGrayBackground: () => hasClass('onGrayBackground'),\n    getLabelClassList: position => component.all(by.xpath('./div')).get(position).getAttribute('class'),\n    click: () => component.click(),\n    element: () => component\n  };\n};\n\nexport default breadcrumbsDriverFactory;\n"}});