import { HTMLProps } from 'react'

import Image from 'next/image'

const MdxImage = (props: HTMLProps<HTMLImageElement>) => {
  const { src, width, height } = props

  if (src) {
    if (src.startsWith('http')) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={src} />
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...props}
          width={width as number}
          height={height as number}
          crossOrigin="anonymous"
          src={src}
          placeholder="empty"
          loading="lazy"
          alt=""
          fill
        />
      )
    }
  } else {
    return <p>Currently, image is not available. {src}</p>
  }
}

// <Image
//   {...props}
//   width={props.width as number}
//   height={props.height as number}
//   src={props.src as string}
//   placeholder="empty"
//   alt=""
//   crossOrigin="anonymous"
//   loading="lazy"
//   fill
// />
// )

export default MdxImage
