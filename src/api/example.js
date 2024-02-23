export const apiEndpoints = () => {
  const getMessage = async () => {
    return await fetch('https://api.example.com/message')
  }

  return {
    getMessage
  }
}
