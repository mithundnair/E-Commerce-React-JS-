// src/utils/imageLoader.js

// Dynamically import images from a folder
const importAllImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
      const imageName = key.replace('./', '').split('.')[0]; // Extract the file name without extension
      images[imageName] = requireContext(key); // Store image path in an object
    });
    return images;
  };
  
  // Import all images from the 'images' folder
  const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|webp|avif|gif)$/));
  
  export default images;
  