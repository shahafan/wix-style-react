webpackJsonp([100],{1857:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst componentFactory = Component => {\n  let element;\n  let componentInstance;\n\n  const wrapperDiv = document.createElement('div');\n  const ClonedComponent = React.cloneElement(Component, {ref: r => componentInstance = r});\n  ReactDOM.render(<div ref={r => element = r}>{ClonedComponent}</div>, wrapperDiv);\n  return {element: element.childNodes[0], wrapper: wrapperDiv, component: ClonedComponent, componentInstance};\n};\n\nexport const createDriverFactory = driverFactory => element => driverFactory(componentFactory(element));\n\nexport const testkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {\n  const element = wrapper.querySelector(`[data-hook='${dataHook}']`);\n  return driverFactory({element, wrapper});\n};\n\n// enzyme\nexport const enzymeTestkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {\n  const regexp = new RegExp(`^<[^>]+data-hook=\"${dataHook}\"`);\n  const component = wrapper.findWhere(n => typeof n.type() === 'string' && (regexp).test(n.html()));\n  return driverFactory({element: component.node, wrapper});\n};\n\n// protractor\nexport const protractorTestkitFactoryCreator = driverFactory => ({dataHook}) => driverFactory($(`[data-hook='${dataHook}']`));\n\nexport const getStoryUrl = (kind, story) => `iframe.html?selectedKind=${kind}&selectedStory=${story}`;\n\nexport const scrollToElement = el => {\n  browser.executeScript(el => {\n    const offset = el.offsetTop;\n    window.scroll(0, offset);\n  }, el.getWebElement());\n};\n\nexport const waitForVisibilityOf = (elements, errorMsg, timeout = 10000) => {\n  const arrayOfElements = Array.isArray(elements) ? [...elements] : [elements];\n\n  arrayOfElements.map(elem =>\n    browser.wait(protractor.ExpectedConditions.visibilityOf(elem), timeout, errorMsg)\n  );\n\n  return protractor.promise.all(arrayOfElements);\n};\n"}});