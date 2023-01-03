import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="/icons/icon-48x48.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link
          href="/icons/icon-72x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icons/icon-96x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link
          href="/icons/icon-128x128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link
          href="/icons/icon-144x144.png"
          rel="icon"
          type="image/png"
          sizes="144x144"
        />
        <link
          href="/icons/icon-152x152.png"
          rel="icon"
          type="image/png"
          sizes="152x152"
        />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon-384x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="/icons/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="/apple-touch-icon" href="/icons/icon-48x48.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-72x72.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-96x96.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-128x128.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-144x144.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-384x384.png" />
        <link rel="/apple-touch-icon" href="/icons/icon-512x512.png" />
        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#daa520" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta
          name="msapplication-TileImage"
          content="/icons/icon-144x144.png"
        />
      </Head>
      <body className="transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
