import { FC, HTMLProps } from 'react'
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

const getHashLink = (text: string) => {
  return text.replace(/[ ]/g, '-')
}

const className =
  "relative target:before:invisible target:before:-mt-[6rem] target:before:block target:before:h-[6rem] target:before:content-['']"

export const MdxH1 = ({ children }: HTMLProps<HTMLElement>) => {
  const anchor = getHashLink(children as string)
  return (
    <h1 id={anchor} className={className}>
      {getHashLinkInnerComponent({
        children: children as string,
        link: `#${anchor}`,
      })}
    </h1>
  )
}

export const MdxH2 = ({ children }: HTMLProps<HTMLElement>) => {
  const anchor = getHashLink(children as string)
  return (
    <h2 id={anchor} className={className}>
      {getHashLinkInnerComponent({
        children: children as string,
        link: `#${anchor}`,
      })}
    </h2>
  )
}

export const MdxH3 = ({ children }: HTMLProps<HTMLElement>) => {
  const anchor = getHashLink(children as string)
  return (
    <h3 id={anchor} className={className}>
      {getHashLinkInnerComponent({
        children: children as string,
        link: `#${anchor}`,
      })}
    </h3>
  )
}

export const MdxH4 = ({ children }: HTMLProps<HTMLElement>) => {
  const anchor = getHashLink(children as string)
  return (
    <h4 id={anchor} className={className}>
      {getHashLinkInnerComponent({
        children: children as string,
        link: `#${anchor}`,
      })}
    </h4>
  )
}

export const MdxH5 = ({ children }: HTMLProps<HTMLElement>) => {
  const anchor = getHashLink(children as string)
  return (
    <h5 id={anchor} className={className}>
      {getHashLinkInnerComponent({
        children: children as string,
        link: `#${anchor}`,
      })}
    </h5>
  )
}

export const getHashLinkInnerComponent: FC<InnerProps> = ({
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
    <span className="text-primaryText dark:text-darkPrimaryText">
      {children}
    </span>
  </a>
)
