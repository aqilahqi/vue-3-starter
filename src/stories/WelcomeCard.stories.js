import WelcomeCard from '../components/WelcomeCard.vue'

export default {
  component: WelcomeCard
}

export const Default = {
  render: (args) => ({
    components: { WelcomeCard },
    setup() {
      return { args }
    },
    template: '<WelcomeCard v-bind="args" />'
  }),
  args: {
    title: 'Hello World!',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, optio?'
  }
}
