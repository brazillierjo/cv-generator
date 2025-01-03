import {generatePDF} from '~/utils/generatePDF'

export default defineEventHandler(async () => {
    try {
        await generatePDF()
        return {success: true, message: 'PDF généré avec succès'}
    } catch (error) {
        return {success: false}
    }
})
