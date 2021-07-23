import React from 'react';
import { storiesOf } from '@storybook/react';
import WindowInfiniteScrollComponent from './WindowInfiniteScrollComponent';
import ScrolleableTop from './ScrolleableTop';
import ShowDocs from './util/ShowDocs';

storiesOf('Example/reactObserverInfiniteScroll', module)
  .add('Docs', () => <ShowDocs md={require('../docs/react-infinite-scroll-component.md')} />)
  .add('WindowInfiniteScrollComponent', () => <WindowInfiniteScrollComponent />)
  .add('ScrolleableTop', () => <ScrolleableTop />);
