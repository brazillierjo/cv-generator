<script setup lang="ts">
import Profile from '~/components/Profile.vue'
</script>

<template>
  <div class="flex gap-6 p-4">
    <div class="w-1/3">
      <aside class="flex flex-col gap-6">
        <Profile />
      </aside>
    </div>

    <div class="w-2/3">
      <About />
    </div>
  </div>
</template>
