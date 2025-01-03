<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import profileImg from '~/assets/profile.jpeg'
import bgImg from '~/assets/geneva.jpeg'
import type { Locale } from '~/utils/interfaces/Locales'

const cvStore = useCvStore()

onMounted(() => {
  cvStore.loadData(cvStore.currentLocale as Locale)
})
</script>

<template>
  <Card v-if="cvStore.data">
    <div
      class="relative h-24 w-full rounded-t-md bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImg})` }"
    >
      <img
        :src="profileImg"
        alt="Profile photo"
        class="absolute bottom-7 left-16 h-24 w-24 -translate-x-1/2 translate-y-1/2 transform rounded-full border-4 border-white"
      />
    </div>

    <div class="mt-8">
      <h1 class="text-2xl font-semibold text-title">
        {{ cvStore.data.name }}
      </h1>

      <p class="text-lg font-medium text-paragraph">{{ cvStore.data.title }}</p>

      <p class="mt-3 text-sm text-lightParagraph">
        {{ cvStore.data.smallAbout }}
      </p>
    </div>
  </Card>
</template>
