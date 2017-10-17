import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';
import readmeTestkit from '../../../src/Backoffice/Button/README.TESTKIT.md';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';
import IconsExample from './ExampleWithIcons';
import IconsExampleRaw from '!raw-loader!./ExampleWithIcons';

import story from '../../utils/Components/Story';

import component from 'wix-style-react/Button';
import source from '!raw-loader!wix-style-react/Backoffice/Button/Button';

story({
  category: 'Backoffice',
  name: 'Button',
  readmeTestkit,
  source,
  component,
  componentProps: {
    children: 'Hello world!'
  },
  examples: (
    <div>
      <CodeExample title="With icons" code={IconsExampleRaw}>
        <IconsExample/>
      </CodeExample>

      <CodeExample title="Controlled" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  )
});
