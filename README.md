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

类似聊天查看历史记录倒序无限加载

```jsx
import React, { useRef, useState, useCallback } from 'react';
import InfiniteScroll, { InfiniteScrollOutRef } from 'react-observer-infinite-scroll';

const ScrolleableTop = () => {
  const targetRef = useRef<InfiniteScrollOutRef>(null);
  const targetWrapRef = useRef(null);
  const [list, setList] = useState(Array.from({ length: 20 }));
  const [loading, setLoading] = useState(false);

  const next = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setList(pre => pre.concat(Array.from({ length: 20 })));
      setLoading(false);
    }, 2000);
  }, []);

  const toBottom = useCallback(() => {
    targetRef?.current?.scrollToBottom && targetRef?.current?.scrollToBottom();
  }, [targetRef]);
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
      <button
        onClick={toBottom}
        style={{
          width: 100,
          height: 30,
          right: 30,
          top: 30,
          zIndex: 500,
          position: 'fixed',
        }}>
        TO BOTTOM
      </button>
      <InfiniteScroll
        intersectionOption={{ root: targetWrapRef.current }}
        dataLength={list.length}
        inverse
        next={next}
        loading={loading}
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

常用的基于 全局 `Windows` 的无限下拉

``` jsx
import { useState } from 'react';
import InfiniteScroll from 'react-observer-infinite-scroll';

const WindowInfiniteScrollComponent = () => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [loading, setLoading] = useState(false);
  const next = () => {
    setLoading(true);
    setTimeout(() => {
      setData(pre => pre.concat(Array.from({ length: 20 })));
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <InfiniteScroll
        loading={loading}
        hasMore={true}
        next={next}
        loader={<h1>Loading...</h1>}
        dataLength={data.length}>
        {data.map((_, i) => (
          <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>
            #{i + 1} row
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default WindowInfiniteScrollComponent;
```

# props

| name                   | type        | description               |
| ---------------------- | ----------- | ------------------------- |
| **next**               | function    | 触发滚动的回调函数        |
| **loading**            | boolean     | 控制内部 loading 显示状态 |
| **hasMore**            | boolean     | 是否可以加载更多          |
| **children**           | node (list) | 滚动列表子级元素          |
| **loader**             | node        | 加载动画元素              |
| **style**              | object      | 容器样式表                |
| **intersectionOption** | object      | IntersectionObserver 参数 |
| **inverse**            | boolean     | 是否倒序                  |
| **dataLength**         | number      | 滚动列表数据数组的 length    |
