<script setup lang="ts">
import cv from '~/data/cv.json'
import Card from '~/components/ui/Card.vue'
</script>

<template>
  <Card>
    <p class="text-sm text-gray-700">{{ cv.about }}</p>
  </Card>
</template>
