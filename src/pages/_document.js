import { Html, Head, Main, NextScript } from 'next/document'
// const main = document.getElementById("html");
// const sun = document.getElementById("sun")
// sun.addEventListener("click", function () {
//   main.classList.add('dark')
// })
export default function Document() {
  return (
    <Html lang="en" id='html'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
