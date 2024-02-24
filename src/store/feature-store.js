import { defineStore } from 'pinia'
import { ref } from 'vue'
import { vueFeatures } from '@/api/vue-features'

const { allFeatures } = vueFeatures()

export const useFeatureStore = defineStore('features', () => {
  const features = ref(null)

  const getAllFeatures = async () => {
    try {
      const response = await allFeatures()
      const data = await response.json()
      features.value = [...data.features]
    } catch (error) {
      console.log(error)
    }
  }

  return {
    features,
    getAllFeatures
  }
})
