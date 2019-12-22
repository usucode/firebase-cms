<template>
  <div>
    <p>test: {{ title }}</p>
  </div>
</template>

<script lang="ts">
import { createComponent, inject } from '@vue/composition-api'

export default createComponent({
  setup() {
    const state: any = inject('useStore')
    return { ...state }
  }
})
</script>
