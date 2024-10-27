document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all open accordion items
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

        // Toggle the clicked one
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
