import { FC } from 'react'

export function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}

interface Props {
  children: string
}

const H1: FC<Props> = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h1 id={anchor} className="relative">
      <a
        href={link}
        className="hover:opacity-1 absolute w-3 -translate-x-5 -translate-y-5 text-primary opacity-0"
      >
        §
      </a>
      {children}
    </h1>
  )
}
const H2: FC<Props> = ({ children }) => {
  console.log(children)
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  console.log(anchor)
  console.log(link)
  return (
    <h2 id={anchor}>
      <a href={link}>§</a>
      {children}
    </h2>
  )
}

const H3: FC<Props> = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h3 id={anchor} className="relative">
      <a
        href={link}
        className="hover:opacity-1 absolute w-3 -translate-x-5 -translate-y-5 text-primary opacity-0"
      >
        §
      </a>
      {children}
    </h3>
  )
}

const H4: FC<Props> = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h4 id={anchor} className="relative">
      <a
        href={link}
        className="hover:opacity-1 absolute w-3 -translate-x-5 -translate-y-5 text-primary opacity-0"
      >
        §
      </a>
      {children}
    </h4>
  )
}

const H5: FC<Props> = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h5 id={anchor} className="relative">
      <a
        href={link}
        className="hover:opacity-1 absolute w-3 -translate-x-5 -translate-y-5 text-primary opacity-0"
      >
        §
      </a>
      {children}
    </h5>
  )
}
export { H1, H2, H3, H4, H5 }
