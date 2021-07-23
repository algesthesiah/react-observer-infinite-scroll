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
