<script setup lang="ts">
import Profile from '~/components/Profile.vue'
import SkillsTag from '~/components/SkillsTag.vue'
import Educations from '~/components/Educations.vue'
</script>

<template>
  <div class="flex h-full flex-col gap-3">
    <div class="flex h-full gap-3">
      <div class="h-full w-1/3">
        <aside class="flex flex-col gap-3">
          <Profile />
          <About />
          <Contact />
          <SkillsTag />
          <Languages />
        </aside>
      </div>

      <div class="flex h-full w-2/3 flex-col gap-3">
        <Experiences />
      </div>
    </div>

    <div class="">
      <Educations />
    </div>
  </div>
</template>
