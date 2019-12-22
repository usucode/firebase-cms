<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            User Name
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Drawer :drawer.sync="drawer" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { createComponent, ref, provide } from '@vue/composition-api'
import Drawer from '~/components/Drawer.vue'
import Footer from '~/components/Footer.vue'
import counterStore from '~/store/contents'

export default createComponent({
  components: { Drawer, Footer },
  setup() {
    provide('ContentsStore', counterStore())
    const state = {
      drawer: ref(false),
      title: ref('Firebase CMS'),
      items: ref([{ title: 'Sign Out' }])
    }
    provide('useStore', state)
    return { ...state }
  }
})
</script>
