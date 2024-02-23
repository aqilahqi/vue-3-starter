import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFeatureStore = defineStore('features', () => {
  const features = ref(null)

  return {
    features
  }
})
