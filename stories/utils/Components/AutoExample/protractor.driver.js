import {inputTestkitFactory, toggleSwitchTestkitFactory, textTestkitFactory, dropdownTestkitFactory} from '../../../../testkit/protractor';
import {protractorTestkitFactoryCreator} from '../../../../src/test-common';

export default protractorTestkitFactoryCreator(() => ({
  get: {
    toggle: dataHook => toggleSwitchTestkitFactory({dataHook}),
    input: dataHook => inputTestkitFactory({dataHook}),
    funcResult: dataHook => textTestkitFactory({dataHook}),
    dropDown: dataHook => dropdownTestkitFactory({dataHook})
  }
}));
