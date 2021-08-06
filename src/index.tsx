import React, {
  ReactNode,
  useImperativeHandle,
  forwardRef,
  CSSProperties,
  useRef,
  useMemo,
  useState,
  ForwardRefExoticComponent,
  memo,
} from 'react';
import { useIntersection, useUpdateEffect } from 'react-use';
import { usePersistFn, usePrevious } from 'ahooks';
import './index.css';

const getDefaultIntersectionOption = (isInverse: boolean | undefined) => {
  if (isInverse) {
    return { root: null, rootMargin: '20px 0px 0px 0px', threshold: 1 };
  }
  return { root: null, rootMargin: '-20px 0px 0px 0px', threshold: 1 };
};

export interface InfiniteScrollOutRef {
  scrollToBottom?: null | (() => void);
}
type Fn = () => any;

export interface InfiniteScrollProps {
  ref?: React.Ref<InfiniteScrollOutRef>;
  next: Fn;
  style?: CSSProperties;
  hasMore: boolean;
  children: ReactNode;
  loader: ReactNode;
  inverse?: boolean;
  dataLength: number;
  intersectionOption?: IntersectionObserverInit;
}
const InfiniteScroll: ForwardRefExoticComponent<InfiniteScrollProps> = memo(
  forwardRef(({ children, next, style, hasMore, loader, dataLength, inverse, intersectionOption }, ref) => {
    const _intersectionOption = {
      ...getDefaultIntersectionOption(inverse),
      ...intersectionOption,
    };
    const stateRef = useRef({
      // 可能一开始就进入了视口，需要过滤这种情况
      initTime: 0,
    });
    const [loadingShow, setLoadingShow] = useState(true);

    const intersectionRef = useRef<HTMLDivElement>(null);
    const inverseViewRef = useRef<HTMLDivElement>(null);

    const intersection = useIntersection(intersectionRef, _intersectionOption);
    const isIntoVIew = useMemo(
      () =>
        intersection &&
        intersection.intersectionRatio === 1 &&
        stateRef.current.initTime !== 0 &&
        intersection.time - stateRef.current.initTime > 300,
      [intersection]
    );

    const scrollToBottom = usePersistFn(() => {
      if (inverse) {
        return inverseViewRef?.current?.scrollIntoView({
          behavior: 'auto',
          block: 'end',
          inline: 'nearest',
        });
      }
      intersectionRef?.current?.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest',
      });
    });
    useImperativeHandle(ref, () => ({
      scrollToBottom,
    }));

    useUpdateEffect(() => {
      if (isIntoVIew && hasMore) {
        setLoadingShow(true);
        next();
      }
    }, [isIntoVIew, hasMore]);

    const oldDataLength = usePrevious(dataLength);

    useUpdateEffect(() => {
      // 结束场景、过度场景
      if ((oldDataLength === dataLength && !hasMore) || (hasMore && dataLength != oldDataLength)) {
        setLoadingShow(false);
      }
    }, [oldDataLength, dataLength, hasMore]);

    useUpdateEffect(() => {
      if (intersection?.time) {
        if (stateRef.current.initTime === 0) {
          stateRef.current.initTime = intersection?.time;
        }
      }
    }, [stateRef, intersection]);

    return (
      <div className={inverse ? 'react-infinite-scroll-wrap inverse' : 'react-infinite-scroll-wrap'} style={style}>
        {inverse && <div ref={inverseViewRef} className="inverse-view"></div>}
        {children}
        <div ref={intersectionRef}></div>
        {loadingShow && hasMore && (loader || 'loading...')}
      </div>
    );
  })
);
export default InfiniteScroll;
