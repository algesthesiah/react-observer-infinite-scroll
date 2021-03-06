import React, { useRef, useState, useCallback } from 'react';
import InfiniteScroll, { InfiniteScrollOutRef } from '../index';

export const ScrolleableBottom = () => {
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
export default {
  title: 'Example/ScrolleableBottom',
  component: ScrolleableBottom,
};
