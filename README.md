# react-observer-infinite-scroll

一个基于 `IntersectionObserver` 的无限滚动 `react-hook` 组件，支持正向滚动、逆向滚动（类似微信聊天回滚加载历史数据）、滑到底部

# install

```bash
npm install --save react-observer-infinite-scroll

// in code ES6
import InfiniteScroll from 'react-observer-infinite-scroll';
```

# demos

## ScrolleableTop

```jsx
import { useCreation } from 'ahooks';
import React, { RefObject } from 'react';
import { useState } from 'react';
import InfiniteScroll, { InfiniteScrollOutRef } from '../index';

const ScrolleableTop = () => {
  const targetRef = useCreation<RefObject<InfiniteScrollOutRef>>(() => ({ current: null }), []);
  const targetWrapRef = useCreation<RefObject<HTMLDivElement>>(() => ({ current: null }), []);
  const [list, setList] = useState(Array.from({ length: 20 }));

  const next = () => {
    setTimeout(() => {
      setList(pre => pre.concat(Array.from({ length: 20 })));
    }, 2000);
  };
  const toBottom=()=>{
     targetRef?.current?.scrollToBottom && targetRef?.current?.scrollToBottom()
  }
  return (
    <div
      ref={targetWrapRef}
      style={{
        height: 300,
        overflow: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}>
      <button onClick={toBottom}  style={{
        width: 100,
        height: 30,
        right: 30,
        top: 30,
        zIndex: 500,
        position: 'fixed',
      }}>TO BOTTOM</button>
      <InfiniteScroll
        intersectionOption={{ root: targetWrapRef.current }}
        dataLength={list.length}
        inverse
        next={next}
        hasMore={true}
        ref={targetRef}
        loader={<h4>Loading...</h4>}>
        {list.map((_, i) => (
          <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>
            #{i + 1} row
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
export default ScrolleableTop;

```

## WindowInfiniteScrollComponent

``` jsx
import React from 'react';
import InfiniteScroll from '../index';
type State = {
  data: any[];
};
export default class WindowInfiniteScrollComponent extends React.Component<
  {},
  State
> {
  state = {
    data: Array.from({ length: 20 }),
  };

  next = () => {
    setTimeout(() => {
      this.setState({ data: this.state.data.concat(Array.from({ length: 20 })) });
    }, 2000);
  };
  render() {
    return (
      <>
        <InfiniteScroll
          hasMore={true}
          next={this.next}
          loader={<h1>Loading...</h1>}
          dataLength={this.state.data.length}
        >
          {this.state.data.map((_, i) => (
            <div
              key={i}
              style={{ height: 30, margin: 4, border: '1px solid hotpink' }}
            >
              #{i + 1} row
            </div>
          ))}
        </InfiniteScroll>
      </>
    );
  }
}

```

# props

name | type | description
-----|------|------------
**next** | function | 触发滚动的回调函数
**hasMore** | boolean | 是否可以加载更多
**children** | node (list) | 滚动列表子级元素
**loader** | node | 加载动画元素
**style** | object | 容器样式表
**intersectionOption** | object | IntersectionObserver 参数
**inverse** | boolean | 是否倒序
**immediate** | boolean | 是否初始化就执行 next 回调
**dataLength** | number | 滚动列表核心数据的数值
