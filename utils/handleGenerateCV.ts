export const handleGeneratePDF = async () => {
  try {
    const response = await fetch('/api/generate-pdf', {
      method: 'GET',
    })

    if (!response.ok) throw new Error('Erreur lors de la génération du PDF')

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')

    a.href = url
    a.download = 'CV-RINCON_BRAZILLIER_Johan.pdf'
    document.body.appendChild(a)
    a.click()

    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  } catch (error) {
    console.error('Erreur:', error)
  }
}
