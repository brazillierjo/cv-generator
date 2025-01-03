import puppeteer from 'puppeteer'

export async function generatePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/', {
    waitUntil: 'networkidle0',
  })

  await page.pdf({
    path: 'CV-RINCON_BRAZILLIER_Johan.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px',
    },
  })

  await browser.close()
}
