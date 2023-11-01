const generateSampleData = () => {
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports', 'Toys'];
    const sampleData = [];
  
    for (let i = 1; i <= 100; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomPrice = Math.floor(Math.random() * 1000) + 10; // Random price between 10 and 1000
      const randomTitle = `Product ${i}`;
      const randomDescription = `Description for Product ${i}`;
      const randomImage = `https://via.placeholder.com/150?text=Product+${i}`; 
  
      const product = {
        id: i,
        category: randomCategory,
        price: randomPrice,
        title: randomTitle,
        description: randomDescription,
        image: randomImage,
      };
  
      sampleData.push(product);
    }
  
    return sampleData;
  };
  
  export default generateSampleData();
  