webpackJsonp([457],{1500:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {dataTableTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\n\ndescribe('Data Table', () => {\n  const storyUrl = getStoryUrl('Core', 'DataTable');\n  const dataHook = 'story-data-table';\n\n  eyes.it('should call func on row click', () => {\n    const driver = dataTableTestkitFactory({dataHook});\n    const indexToClick = 2;\n    const name = 'Deborah Rhodes';\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cant find Data Table Component')\n      .then(() => {\n        const rowData = driver.getRowTextByIndex(indexToClick);\n        expect(rowData).toBe(`#${indexToClick + 1} ${name}`);\n        driver.clickRowByIndex(indexToClick);\n\n        const EC = protractor.ExpectedConditions;\n        browser.wait(EC.alertIsPresent(), 10000, 'Alert is not getting present :(')\n          .then(() => {\n            expect(browser.switchTo().alert().getText()).toBe(`You clicked \"${name}\", row number ${indexToClick + 1}`);\n            browser.switchTo().alert().accept();\n          });\n      });\n  });\n});\n"}});