/**
 *  @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureCard from '@/components/FeatureCard.vue'

const wrapper = mount(FeatureCard, {
  props: {
    id: 1,
    title: 'Document',
    icon: 'Document',
    body: 'Document body text'
  }
})

describe('Testing FeatureCard.vue', () => {
  it('should render elements', () => {
    expect(wrapper.find('i').exists())
    expect(wrapper.find('h3').exists())
    expect(wrapper.find('p').exists())
  })

  it('should have all required props', () => {
    expect(wrapper.props().id).toBe(1)
    expect(wrapper.props().title).toBe('Document')
    expect(wrapper.props().icon).toBe('Document')
    expect(wrapper.props().body).toBe('Document body text')
  })
})
