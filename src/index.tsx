import React, {
  ReactNode,
  useImperativeHandle,
  forwardRef,
  CSSProperties,
  useRef,
  useMemo,
  useState,
  memo,
} from 'react'
import { useIntersection, useUpdateEffect } from 'react-use'
import { useDebounceFn, usePersistFn, usePrevious } from 'ahooks'
import './index.css'

type Fn = () => any
export interface InfiniteScrollOutRef {
  scrollToBottom?: null | (() => void)
}
export interface InfiniteScrollProps {
  ref?: React.Ref<InfiniteScrollOutRef>
  next: Fn
  style?: CSSProperties
  hasMore: boolean
  children: ReactNode
  loader: ReactNode
  inverse?: boolean
  dataLength: number
  immediate?: boolean
  intersectionOption?: IntersectionObserverInit
}
const defaultIntersectionOption = { root: null, rootMargin: '0px', threshold: 1 }
const InfiniteScroll: React.ForwardRefExoticComponent<InfiniteScrollProps> = memo(
  forwardRef(({ children, next, style, hasMore, loader, dataLength, immediate, inverse, intersectionOption }, ref) => {
    const _intersectionOption = {
      ...defaultIntersectionOption,
      ...intersectionOption,
    }
    const [loadingShow, setLoadingShow] = useState(true)
    const { run } = useDebounceFn(
      () => {
        next && next()
      },
      {
        wait: 300,
      }
    )

    const stateRef = useRef({
      isInit: false,
    })
    const intersectionRef = useRef<HTMLDivElement>(null)
    const inverseViewRef = useRef<HTMLDivElement>(null)

    const intersection = useIntersection(intersectionRef, _intersectionOption)
    const isIntoVIew = useMemo(() => intersection && intersection.intersectionRatio === 1, [intersection])

    const scrollToBottom = usePersistFn(() => {
      if (inverse) {
        return inverseViewRef?.current?.scrollIntoView({
          behavior: 'auto',
          block: 'end',
          inline: 'nearest',
        })
      }
      intersectionRef?.current?.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest',
      })
    })
    useImperativeHandle(ref, () => ({
      scrollToBottom,
    }))

    useUpdateEffect(() => {
      if (!stateRef.current.isInit) {
        // 初始化场景
        stateRef.current.isInit = true
        if (immediate) {
          setLoadingShow(true)
          run()
          return
        }
        return
      }
      // 进入视图场景
      if (isIntoVIew && hasMore) {
        setLoadingShow(true)
        run()
      }
    }, [isIntoVIew, hasMore])

    const oldDataLength = usePrevious(dataLength)
    useUpdateEffect(() => {
      if (oldDataLength === dataLength) {
        setLoadingShow(false)
      }
    }, [oldDataLength, dataLength])
    return (
      <div className={inverse ? 'react-infinite-scroll-wrap inverse' : 'react-infinite-scroll-wrap'} style={style}>
        {inverse && <div ref={inverseViewRef} className="inverse-view"></div>}
        {children}
        <div ref={intersectionRef}></div>
        <div className="inverse-fake"></div>
        {loadingShow && hasMore && (loader || 'loading...')}
      </div>
    )
  })
)
export default InfiniteScroll
