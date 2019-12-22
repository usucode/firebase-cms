<template>
  <div>
    <v-card>
      <v-card-title>
        <h1>Posts</h1>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  setup() {
    const state = {
      search: ref(''),
      headers: ref([
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Categories', value: 'categories' },
        { text: 'Updated', value: 'updatedAt' },
        { text: 'Status', value: 'status' },
        { text: 'Author', value: 'author' }
      ]),
      desserts: ref([
        {
          name: 'Frozen Yogurt',
          categories: 'programming',
          author: 'usu',
          carbs: 24,
          status: 'publish',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          categories: 'react',
          author: 'usu',
          carbs: 37,
          status: 'published',
          iron: '1%'
        },
        {
          name: 'Eclair',
          categories: 'vue',
          author: 'usu',
          carbs: 23,
          status: 'draft',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          categories: 'vue',
          author: 'usu',
          carbs: 67,
          status: 'published',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          categories: 'nuxt',
          author: 'usu',
          carbs: 49,
          status: 'draft',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          categories: 'nuxt',
          author: 'usu',
          carbs: 94,
          status: 'published',
          iron: '0%'
        }
      ])
    }
    return { ...state }
  }
})
</script>
