import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

interface Props {
  children: string
  className: string
}

const MdxCodeBlock = ({ children, className }: Props): JSX.Element => {
  const language =
    className !== undefined
      ? (className.replace(/language-/, '') as Language)
      : ('markdown' as Language)

  return (
    <Highlight
      {...defaultProps}
      code={children}
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
