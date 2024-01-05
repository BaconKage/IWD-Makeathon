document.addEventListener('DOMContentLoaded', function () {
    // Adding event listener for dark mode toggle button
    document.getElementById('darkModeToggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

function showImagePopup(imagePath) {
    var popup = document.createElement("div");
    popup.className = "image-popup";

    var img = document.createElement("img");
    img.src = imagePath;

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
        document.body.removeChild(popup);
    };

    popup.appendChild(img);
    popup.appendChild(closeBtn);

    document.body.appendChild(popup);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
// Function to change the heading color
function changeHeadingColor() {
    const heading = document.getElementById('main-heading');
    const randomColor = getRandomColor();
    heading.style.color = randomColor;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Setting interval to change heading color every 1 seconds (1000 milliseconds)
setInterval(changeHeadingColor, 1000);

