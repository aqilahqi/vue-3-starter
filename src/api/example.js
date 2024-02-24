export const apiEndpoints = () => {
  const getMessage = async () => {
    return await fetch('https://api.example.com/message')
  }

  const getFeatures = async () => {
    return await fetch('http://localhost:5173/features')
  }

  return {
    getMessage,
    getFeatures
  }
}
