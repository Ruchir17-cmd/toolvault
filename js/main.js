let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    displayResources(resources);
    setupSearch();
    setupFilters();
});

function displayResources(toDisplay) {
    const grid = document.getElementById('resourcesGrid');
    const countText = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    countText.textContent = toDisplay.length;
    
    if (toDisplay.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';
    
    toDisplay.forEach(res => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.onclick = () => window.open(res.url, '_blank');
        
        // Use the fields from resources.js, fallback to Community
        const name = res.contributorName || "@Community";
        const link = res.contributorLink || "#";
        
        card.innerHTML = `
            <a href="${link}" target="_blank" class="contributor-tag" onclick="event.stopPropagation()">
                ${name}
            </a>
            <span class="resource-type">${res.type}</span>
            <h3 class="resource-title">${res.title}</h3>
            <p class="resource-description">${res.description}</p>
            <div class="resource-tags">
                ${res.tags.map(t => `<span class="resource-tag">${t}</span>`).join('')}
            </div>
            <span class="resource-link">View Resource →</span>
        `;
        grid.appendChild(card);
    });
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        const filtered = resources.filter(r => 
            r.title.toLowerCase().includes(query) || 
            r.description.toLowerCase().includes(query) ||
            r.tags.some(t => t.includes(query))
        );
        displayResources(filterByType(filtered, currentFilter));
    });
}

function setupFilters() {
    document.querySelectorAll('.tag').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            displayResources(filterByType(resources, currentFilter));
        });
    });
}

function filterByType(list, type) {
    return type === 'all' ? list : list.filter(r => r.type === type);
}