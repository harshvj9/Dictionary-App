document.getElementById('searchBtn').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value.toLowerCase();
    const resultBox = document.getElementById('result');
    const wordOutput = document.getElementById('wordOutput');
    const definition = document.getElementById('definition');

    // Fetch definition from the dictionary API
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found');
            }
            return response.json();
        })
        .then(data => {
            const wordData = data[0];
            wordOutput.textContent = wordData.word;
            definition.textContent = wordData.meanings[0].definitions[0].definition;
            resultBox.style.display = 'block';
        })
        .catch(error => {
            wordOutput.textContent = 'Word not found!';
            definition.textContent = 'Please try another word.';
            resultBox.style.display = 'block';
        });
});
