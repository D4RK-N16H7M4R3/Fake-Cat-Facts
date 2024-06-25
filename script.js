const facts = [
    "Cats can rotate their ears 180 degrees.",
    "A cat's brain is 90% similar to a human's.",
    "Cats sleep for 70% of their lives.",
    "A group of kittens is called a 'kindle'.",
    "Cats have five toes on their front paws and four on their back paws.",
    "Cats can fly when nobody is looking.",
    "All cats are secretly master chefs.",
    "A group of cats is called a 'meowtain'.",
    "Cats invented the internet to spread cute cat pictures.",
    "Cats speak fluent dolphin."
  ];
  
  function generateFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    fetchCatImage(randomFact);
  }
  
  function fetchCatImage(fact) {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data[0].url;
        displayFactAndImage(fact, imageUrl);
      })
      .catch(error => {
        console.error('Error fetching cat image:', error);
      });
  }
  
  function displayFactAndImage(fact, imageUrl) {
    document.getElementById('fact-text').textContent = fact;
    document.getElementById('cat-image').src = imageUrl;
  }
  