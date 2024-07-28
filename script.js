fetch('manga_updates.txt')
    .then(response => response.text())
    .then(data => {
        const updatesDiv = document.getElementById('updates');
        updatesDiv.innerHTML = data.replace(/\n/g, '<br>');
    })
    .catch(error => console.error('Error fetching updates:', error));

