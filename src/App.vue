<script setup>
import { ref, onMounted } from 'vue'
import { apiEndpoints } from '@/api/example.js'
import { useFeatureStore } from './store/feature-store'
import { storeToRefs } from 'pinia'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const message = ref(null)

const { getMessage } = apiEndpoints()

const { features } = storeToRefs(useFeatureStore())

const getTheMessage = async () => {
  try {
    const response = await getMessage()
    const data = await response.json()
    message.value = data.message
  } catch (error) {
    console.log(error)
  }
}

const getFeatures = async() => {
  try {
    const response = await fetch('http://localhost:5173/features')
    const data = await response.json()
    features.value = [...data.features]
  }catch (error) {
    console.log(error)
  }
}

onMounted(async () => await getTheMessage().then(() => getFeatures()))
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper" v-if="message">
      <HelloWorld :msg="message" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
