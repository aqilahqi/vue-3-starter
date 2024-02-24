/**
 *  @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeCard from '@/components/WelcomeCard.vue'

describe('Testing WelcomeCard.vue', () => {
  const wrapper = mount(WelcomeCard, {
    props: {
      title: 'Hello Ekco',
      body: "I've completed the test!"
    }
  })

  it('should render elements', () => {
    expect(wrapper.find('h1').exists())
    expect(wrapper.find('h3').exists())
  })

  it('should have all required props', () => {
    expect(wrapper.props().title).toBe('Hello Ekco')
  })

  wrapper.unmount()

  it('should not render h3 element if prop.body is not passed', () => {
    const wrapper = mount(WelcomeCard, {
      props: {
        title: 'Hello Ekco'
      }
    })
    expect(wrapper.find('h3').exists(false))
  })
})
