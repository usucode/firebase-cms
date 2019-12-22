<template>
  <v-sheet class="pa-4">
    <h1>Dashboard Page</h1>
    <h2>Carts</h2>
    <div class="flex mt-4">
      <v-card class="mt-4 mr-4" width="400">
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">User Registrations</div>
          <div class="subheading font-weight-light grey--text">
            Last Campaign Performance
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small>
            mdi-clock
          </v-icon>
          <span class="caption grey--text font-weight-light"
            >last registration 26 minutes ago</span
          >
        </v-card-text>
      </v-card>
      <v-card class="mt-4 mr-4" width="400">
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="green"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">User Registrations</div>
          <div class="subheading font-weight-light grey--text">
            Last Campaign Performance
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small>
            mdi-clock
          </v-icon>
          <span class="caption grey--text font-weight-light"
            >last registration 26 minutes ago</span
          >
        </v-card-text>
      </v-card>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { createComponent, ref, inject } from '@vue/composition-api'
export default createComponent({
  setup() {
    const contentsStore: any = inject('ContentsStore')
    const state = {
      labels: ref(['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm']),

      value: ref([200, 675, 410, 390, 310, 460, 250, 240])
    }
    return { ...state, ...contentsStore }
  }
})
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
