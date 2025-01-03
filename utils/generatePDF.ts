import puppeteer from 'puppeteer'

export async function generatePDF() {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? process.env.NUXT_PUBLIC_SITE_URL
      : 'http://localhost:3000'

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  baseURL &&
    (await page.goto(baseURL, {
      waitUntil: 'networkidle0',
    }))

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    scale: 1,
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
  })

  await browser.close()

  return pdfBuffer
}
