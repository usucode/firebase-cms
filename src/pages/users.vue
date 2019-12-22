<template>
  <div>
    <h1>Users</h1>
    <v-list three-line>
      <v-list-item-group v-if="users[0] !== undefined">
        <div v-for="(user, index) in users" :key="index">
          <v-divider v-if="index > 0"></v-divider>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>account_circle</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
      <v-skeleton-loader
        ref="skeleton"
        v-for="i of 5"
        v-else
        :key="`key-${i}`"
        :tile="false"
        type="list-item-avatar-three-line"
        class="mx-auto"
      ></v-skeleton-loader>
    </v-list>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  setup() {
    const state = {
      users: ref([
        {
          id: 0,
          name: '田中太郎',
          email: 'tanaka@sample.com'
        },
        {
          id: 1,
          name: '山田宏',
          email: 'yamada@sample.com'
        },
        {
          id: 2,
          name: '織田雅彦',
          email: 'oda@sample.com'
        }
      ])
    }
    return { ...state }
  }
})
</script>
