import eyes from 'eyes.it';
import {buttonTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';
import autoExampleTestkitFactory from '../../../stories/utils/Components/AutoExample/protractor.driver';

describe('Backoffice Button', () => {
  const storyUrl = getStoryUrl('Backoffice', 'Button');
  const beforeClickState = 'Click Me!';
  const clickedState = 'Clicked!';

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should click a button', () => {
    const dataHook = 'story-button-enabled';
    const driver = buttonTestkitFactory({dataHook});

    waitForVisibilityOf(driver.element(), 'Cannot find Button')
      .then(() => {
        expect(driver.getButtonTextContent()).toBe(beforeClickState);
        driver.click();
        expect(driver.getButtonTextContent()).toBe(clickedState);
      });
  });

  eyes.it('should render disabled, suffixIcon, prefixIcon buttons correctly', () => {
    const dataHookDisabled = 'story-button-disabled';
    const dataHookPrefix = 'story-button-prefix';
    const dataHookSuffix = 'story-button-suffix';
    const driverDisabled = buttonTestkitFactory({dataHook: dataHookDisabled});
    const driverPrefix = buttonTestkitFactory({dataHook: dataHookPrefix});
    const driverSuffix = buttonTestkitFactory({dataHook: dataHookSuffix});

    waitForVisibilityOf([driverDisabled.element(), driverPrefix.element(), driverSuffix.element()], 'Cannot find Button')
      .then(() => {
        expect(driverDisabled.isButtonDisabled()).toBe(true);
        expect(driverPrefix.isPrefixIconExists()).toBe(true);
        expect(driverSuffix.isSuffixIconExists()).toBe(true);
      });
  });

  describe('should handle function props', () => {
    const autoExampleDriver = autoExampleTestkitFactory({dataHook: 'auto-example'});
    const driver = buttonTestkitFactory({dataHook: 'storybook-button-preview'});
    const defaultText = 'Interaction preview';

    eyes.it('for onClick', () => {
      expect(autoExampleDriver.get.funcResult('storybook-Button-onClick-input').getText()).toBe(defaultText);
      driver.click();
      expect(autoExampleDriver.get.funcResult('storybook-Button-onClick-input').getText()).toBe('Clicked!');
    });

    eyes.it('for onMouseEnter', () => {
      expect(autoExampleDriver.get.funcResult('storybook-Button-onMouseEnter-input').getText()).toBe(defaultText);
      driver.click();
      expect(autoExampleDriver.get.funcResult('storybook-Button-onMouseEnter-input').getText()).toBe('Mouse Enter!');
    });

    eyes.it('for onMouseLeave', () => {
      expect(autoExampleDriver.get.funcResult('storybook-Button-onMouseLeave-input').getText()).toBe(defaultText);
      driver.click();
      browser.actions().mouseMove({x: 500, y: 0}).perform();
      expect(autoExampleDriver.get.funcResult('storybook-Button-onMouseLeave-input').getText()).toBe('Mouse Leave!');
    });
  });

  describe('should handle element props', () => {
    const autoExampleDriver = autoExampleTestkitFactory({dataHook: 'auto-example'});
    const driver = buttonTestkitFactory({dataHook: 'storybook-button-preview'});

    eyes.it('for prefixIcon', () => {
      browser.executeScript('window.scrollTo(0,500)');

      autoExampleDriver.get.dropDown('storybook-Button-prefixIcon-input').click();
      autoExampleDriver.get.dropDown('storybook-Button-prefixIcon-input').clickDropDownItem(3);
      expect(driver.isPrefixIconExists()).toBe(true);
    });

    eyes.it('for suffixIcon', () => {
      browser.executeScript('window.scrollTo(0,500)');

      autoExampleDriver.get.dropDown('storybook-Button-suffixIcon-input').click();
      autoExampleDriver.get.dropDown('storybook-Button-suffixIcon-input').clickDropDownItem(2);
      expect(driver.isSuffixIconExists()).toBe(true);
    });
  });

});
