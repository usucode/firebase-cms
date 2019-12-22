<template>
  <div>
    <h1>SignIn page</h1>
    <h2>mail password signin</h2>
    <p>signin: {{ signin }}</p>
    <v-card class="pa-8">
      <v-text-field v-model="email" label="email" filled />
      <v-text-field v-model="passwd" label="password" filled />
      <v-btn
        @click="SignIn"
        :loading="loading"
        :disabled="loading"
        color="primary"
        >login</v-btn
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import firebase from 'firebase'
export default createComponent({
  setup() {
    const state = {
      email: ref(''),
      passwd: ref(''),
      signin: ref(false),
      loading: ref(false),
      token: ref('')
    }
    const methods = {
      async SignIn() {
        state.loading.value = true
        await firebase
          .auth()
          .signInWithEmailAndPassword(state.email.value, state.passwd.value)
          .then(
            (res: any) => {
              state.signin.value = true
            },
            (err) => {
              // eslint-disable-next-line no-console
              console.error(err.message)
            }
          )
        const user = firebase.auth().currentUser
        if (user) {
          state.token.value = await user.getIdToken()
          localStorage.setItem('jwt', state.token.value)
        }
        state.loading.value = false
      },
      SignOut() {
        firebase.auth().signOut()
      }
    }
    return { ...state, ...methods }
  }
})
</script>
