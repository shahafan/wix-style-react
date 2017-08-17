import React from 'react';
import styles from './ExampleBreadcrumbs.scss';

import Breadcrumbs from '../../src/Breadcrumbs';

const items = [{id: '1', value: 'first item'}, {id: '2', value: 'second item'}, {id: '3', value: 'third item'}];

export default () =>
  <div>
    <div className={`${styles.onGrayBackground} ${styles.exampleWrapper}`}>
      <Breadcrumbs
        dataHook={'story-breadcrumbs-onclick'}
        items={items}
        onClick={(item) => {
          alert(`clicked element is: ${JSON.stringify(item)}`)
        }}/>
    </div>
  </div>;

