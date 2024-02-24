import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureCard from '@/components/FeatureCard.vue'

describe('Testing feature card', () => {
  it('should render', () => {
    const wrapper = mount(FeatureCard)
  })
})
