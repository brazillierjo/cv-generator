import { generatePDF } from '~/utils/generatePDF'

export default defineEventHandler(async event => {
  try {
    const pdfBuffer = await generatePDF()

    setHeader(event, 'Content-Type', 'application/pdf')
    setHeader(
      event,
      'Content-Disposition',
      'attachment; filename=CV-RINCON_BRAZILLIER_Johan.pdf',
    )

    return pdfBuffer
  } catch (error) {
    return { success: false }
  }
})
