<script setup>
	import { ref, onMounted } from 'vue'
	import { apiEndpoints } from '@/api/example.js'
	import { useFeatureStore } from './store/feature-store'
	import { storeToRefs } from 'pinia'
	import WelcomeCard from './components/WelcomeCard.vue'
	import FeatureCard from './components/FeatureCard.vue'

	const message = ref(null)

	const { getMessage, getFeatures } = apiEndpoints()

	const { features } = storeToRefs(useFeatureStore())

	const getTheMessage = async () => {
		try {
			const response = await getMessage()
			const data = await response.json()
			message.value = data
		} catch (error) {
			console.log(error)
		}
	}

	const getTheFeatures = async() => {
		try {
			const response = await getFeatures()
			const data = await response.json()
			features.value = [...data.features]
		}catch (error) {
			console.log(error)
		}
	}

	onMounted(async () => await getTheMessage().then(() => getTheFeatures()))

</script>

<template>
	<header>
		<img alt="Ekco logo"
			class="logo"
			src="./assets/ekco-logo.png"
			width="auto"
		>

		<div v-if="message"
			class="wrapper"
		>
			<WelcomeCard v-bind="message" />
		</div>
	</header>

	<main>
		<FeatureCard v-for="feature in features"
			:key="feature.id"
			primary
			v-bind="feature"
		/>
	</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 200px;
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
