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
