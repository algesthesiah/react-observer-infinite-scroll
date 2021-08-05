import React from 'react';
import { useState } from 'react';
import InfiniteScroll from '../index';

export const WindowInfiniteScrollComponent = () => {
    const [data, setData] = useState(Array.from({ length: 20 }));
    const next = () => {
        setTimeout(() => {
            setData(pre => pre.concat(Array.from({ length: 20 })));
        }, 2000);
    };
    return (
        <>
            <InfiniteScroll hasMore={true} next={next} loader={<h1>Loading...</h1>} dataLength={data.length}>
                {data.map((_, i) => (
                    <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>
                        #{i + 1} row
                    </div>
                ))}
            </InfiniteScroll>
        </>
    );
};

export default {
  title: 'Example/WindowInfiniteScrollComponent',
  component: WindowInfiniteScrollComponent,
};
