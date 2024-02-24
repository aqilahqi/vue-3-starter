export const welcomeMessages = () => {
  const mainMessage = async () => {
    return await fetch('https://api.example.com/message')
  }

  return {
    mainMessage
  }
}
