import { HTMLProps } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

const MdxCodeBlock = ({
  children,
  className,
}: HTMLProps<HTMLElement>): JSX.Element => {
  const stringLength = children?.toLocaleString().length

  // TODO : inline code 의 경우 정상적으로 처리 되고 있지 않아서 임시로 넣은 코드
  if (stringLength !== undefined && stringLength < 50) {
    return (
      <span className={`rounded bg-darkPrimaryText px-1 dark:bg-primaryText`}>
        {children}
      </span>
    )
  }

  const language =
    className !== undefined
      ? (className.replace(/language-/, '') as Language)
      : ('markdown' as Language)

  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {fpFunction.pipe(
            tokens,
            fpArray.mapWithIndex((i, a) => (
              <div key={i} {...getLineProps({ line: a, key: i })}>
                {fpFunction.pipe(
                  a,
                  fpArray.mapWithIndex((ii, aa) => (
                    <span key={ii} {...getTokenProps({ token: aa, key: ii })} />
                  ))
                )}
              </div>
            ))
          )}
        </pre>
      )}
    </Highlight>
  )
}

export default MdxCodeBlock
