<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const state = {
      items: ref([
        {
          icon: 'dashboard',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'library_books',
          title: 'Posts',
          to: '/posts'
        },
        {
          icon: 'web',
          title: 'Pages',
          to: '/pages'
        },
        {
          icon: 'supervisor_account',
          title: 'Users',
          to: '/users'
        },
        {
          icon: 'build',
          title: 'Settings',
          to: '/settings'
        },
        {
          icon: 'bug_report',
          title: 'Test',
          to: '/test'
        }
      ])
    }
    return { ...state }
  }
})
</script>
