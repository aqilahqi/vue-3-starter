import FeatureCard from '../components/FeatureCard.vue'

export default {
  component: FeatureCard
}

export const Default = {
  render: (args) => ({
    components: { FeatureCard },
    setup() {
      return { args }
    },
    template: '<FeatureCard v-bind="args" />'
  }),
  args: {
    id: 20,
    title: 'Feature Card',
    body: 'This is a <a href="#">Feature Card</a> component',
    icon: 'Support'
  }
}
