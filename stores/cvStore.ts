import { defineStore } from 'pinia'
import type { CvData } from '~/utils/interfaces/CV'
import { cvData } from '~/data/cvData'
import type { Locale } from '~/utils/interfaces/Locales'

export const useCvStore = defineStore('cv', {
  state: () => ({
    currentLocale: 'en-US',
    data: null as CvData | null,
    isLoading: false,
  }),

  actions: {
    loadData(locale: Locale) {
      this.isLoading = true

      try {
        if (cvData[locale]) {
          this.data = cvData[locale]
        } else {
          console.error(`Locale non supportée: ${locale}`)
          this.data = null
        }

        this.currentLocale = locale
      } catch (error) {
        console.error(
          `Erreur lors du chargement des données pour ${locale}`,
          error,
        )
        this.data = null
      } finally {
        this.isLoading = false
      }
    },
  },
})
