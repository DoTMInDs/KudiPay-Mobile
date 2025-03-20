// Get all relevant elements
const debitCardBtns = [
    document.getElementById('debitCardBtn'),
    document.getElementById('debitCardBtn1'),
    document.getElementById('debitCardBtn2'),
    document.getElementById('debitCardBtn3')
];

const debitCardContents = [
    document.getElementById('debitCardContent'),
    document.getElementById('debitCardContent1'),
    document.getElementById('debitCardContent2'),
    document.getElementById('debitCardContent3')
];

// Add event listeners to each button
debitCardBtns.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating
        debitCardContents.forEach((content, contentIndex) => {
            if (index === contentIndex) {
                content.classList.toggle('card-active');
            } else {
                content.classList.remove('card-active');
            }
        });
    });
});

// Add event listeners to each content to stop propagation
debitCardContents.forEach(content => {
    content.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating
    });
});

// Close all card contents when clicking outside
document.addEventListener('click', (event) => {
    if (!debitCardBtns.some(btn => btn.contains(event.target)) &&
        !debitCardContents.some(content => content.contains(event.target))) {
        debitCardContents.forEach(content => {
            content.classList.remove('card-active');
        });
    }
});


