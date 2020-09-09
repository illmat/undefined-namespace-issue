<template>
  <div id="app">
    <h1>Demo</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  foo: stripe.Token | null = null;
}
</script>

<style>
</style>
