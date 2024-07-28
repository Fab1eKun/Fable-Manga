document.addEventListener('DOMContentLoaded', () => {
    const mangaList = document.getElementById('manga-list');
    const mangas = [
        { title: 'Manga Title 1', description: 'Description of manga 1' },
        { title: 'Manga Title 2', description: 'Description of manga 2' },
        { title: 'Manga Title 3', description: 'Description of manga 3' }
    ];

    mangas.forEach(manga => {
        const mangaItem = document.createElement('div');
        mangaItem.className = 'manga-item';
        mangaItem.innerHTML = `<h2>${manga.title}</h2><p>${manga.description}</p>`;
        mangaList.appendChild(mangaItem);
    });
});
