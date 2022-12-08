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
      : ('bash' as Language)

  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default MdxCodeBlock
