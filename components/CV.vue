<script setup lang="ts">
import Profile from '~/components/Profile.vue'
import SkillsTag from '~/components/SkillsTag.vue'
</script>

<template>
  <div class="flex gap-4 p-4">
    <div class="w-1/3">
      <aside class="flex flex-col gap-4">
        <Profile />
        <Contact />
        <SkillsTag />
        <Languages />
      </aside>
    </div>

    <div class="w-2/3">
      <About />
    </div>
  </div>
</template>
