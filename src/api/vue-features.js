export const vueFeatures = () => {
  const allFeatures = async () => {
    return await fetch('http://localhost:5173/features')
  }

  return {
    allFeatures
  }
}
