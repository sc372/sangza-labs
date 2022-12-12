import { FC } from 'react'
import { RiLinksLine } from 'react-icons/ri'

interface Props {
  children: string
  anchor?: string
}
interface InnerProps {
  children: string
  link: string
  onClick?: () => void
}

function getAnchor(text: string) {
  return text.replace(/[ ]/g, '-')
}

const className =
  "relative target:before:invisible target:before:-mt-[6rem] target:before:block target:before:h-[6rem] target:before:content-['']"

export const H1: FC<Props> = ({ children, anchor = getAnchor(children) }) => (
  <h1 id={anchor} className={className}>
    {getAnchorInnerComponent({ children, link: `#${anchor}` })}
  </h1>
)

export const H2: FC<Props> = ({ children, anchor = getAnchor(children) }) => (
  <h2 id={anchor} className={className}>
    {getAnchorInnerComponent({ children, link: `#${anchor}` })}
  </h2>
)

export const H3: FC<Props> = ({ children, anchor = getAnchor(children) }) => (
  <h3 id={anchor} className={className}>
    {getAnchorInnerComponent({ children, link: `#${anchor}` })}
  </h3>
)

export const H4: FC<Props> = ({ children, anchor = getAnchor(children) }) => (
  <h4 id={anchor} className={className}>
    {getAnchorInnerComponent({ children, link: `#${anchor}` })}
  </h4>
)

export const H5: FC<Props> = ({ children, anchor = getAnchor(children) }) => (
  <h5 id={anchor} className={className}>
    {getAnchorInnerComponent({ children, link: `#${anchor}` })}
  </h5>
)

export const getAnchorInnerComponent: FC<InnerProps> = ({
  children,
  link,
  onClick,
}) => (
  <a href={link} className="no-underline" onClick={onClick}>
    <span
      className={`absolute w-full -translate-x-6 translate-y-1 text-primary opacity-0 hover:opacity-100`}
    >
      <RiLinksLine />
    </span>
    {children}
  </a>
)
