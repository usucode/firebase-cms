<template>
  <div>
    <v-snackbar v-model="snackbar" :top="true" :color="snackbarColor">
      {{ snackbarText }}
      <v-btn @click="snackbar = false" text>
        Close
      </v-btn>
    </v-snackbar>
    <v-sheet class="pa-4">
      <h1 v-if="slug === ''" class="mb-4">
        new create page
        <v-chip v-if="state === 'published'" class="ma-2" color="primary">
          published
        </v-chip>
        <v-chip v-else-if="state === 'drafted'" class="ma-2" color="warning">
          drafted
        </v-chip>
      </h1>
      <h1 v-else class="mb-4">
        edit page
        <v-chip v-if="state === 'published'" class="ma-2" color="primary">
          published
        </v-chip>
        <v-chip v-else-if="state === 'drafted'" class="ma-2" color="warning">
          drafted
        </v-chip>
      </h1>
      <v-text-field label="title" filled></v-text-field>
      <v-text-field v-model="slug" label="slug" filled></v-text-field>
      <v-select :items="categories" filled label="category"></v-select>
      <v-textarea filled name="content" label="content" value=""></v-textarea>
      <v-btn @click="changeState('published')" large text color="blue" outlined
        >Publish</v-btn
      >
      <v-btn @click="changeState('drafted')" large text color="warning" outlined
        >Draft</v-btn
      >
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { createComponent, ref, onMounted, computed } from '@vue/composition-api'

export default createComponent({
  setup(props, { root }) {
    const state = {
      slug: ref(''),
      title: ref(''),
      categories: ref(['vue', 'nuxt', 'go', 'wordpress']),
      state: ref(''),
      snackbar: ref(false),
      snackbarText: ref(''),
      snackbarColor: computed(() => {
        if (state.state.value === 'published') return 'info'
        else if (state.state.value === 'drafted') return 'warning'
      })
    }
    onMounted(() => {
      if (root.$route.params.slug === 'new') return
      state.slug.value = root.$route.params.slug
    })
    const methods = {
      changeState(str: string) {
        state.state.value = str
        if (str === 'published') {
          state.snackbarText.value = '投稿しました。'
        } else if (str === 'drafted') {
          state.snackbarText.value = '下書きにしました。'
        }
        state.snackbar.value = true
      }
    }
    return { ...state, ...methods }
  }
})
</script>
