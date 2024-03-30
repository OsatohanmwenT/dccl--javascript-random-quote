const adviceText = document.getElementById("advice-text")
const author = document.getElementById("author")
const tagsContainer = document.querySelector(".hint")

const getAdvice = () => {

  async function fetchData() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      console.log(data);

      author.innerHTML = `${data.author}`
      adviceText.innerHTML = `"${data.content}"`

      const tags = data.tags
      tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
}
getAdvice()

const copyToClipBoard = () => {
  const advice = adviceText.innerText
  const authorText = author.innerText

const contentToCopy = `${advice}\n${authorText}`;

    navigator.clipboard.writeText(contentToCopy)
        .then(() => {
            alert('Advice and author have been copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}