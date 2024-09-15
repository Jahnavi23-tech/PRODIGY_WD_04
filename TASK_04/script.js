// JavaScript to add some interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('projectModal');
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // Function to open the modal
    function openModal(title, imgSrc, description) {
        document.getElementById('projectTitle').innerText = title;
        document.getElementById('projectImage').src = imgSrc;
        document.getElementById('projectDescription').innerText = description;
        modal.style.display = 'block';
    }

    // Function to close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Add event listeners to all buttons with the class 'btn-secondary'
    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            switch (project) {
                case 'project1':
                    openModal('Portfolio Website', 'images/portfolio-website-large.jpg', 'This personal portfolio website showcases my web development skills. It features a responsive design, interactive elements, and sections for my projects, skills, and contact information.');
                    break;
                case 'project2':
                    openModal('E-Commerce Website', 'images/e-commerce-website-large.jpg', 'An online store with features like product listings, a shopping cart, and a checkout process. It was built using React for the frontend and Node.js/Express for the backend, with a MongoDB database to manage product and order information.');
                    break;
                case 'project3':
                    openModal('Weather Website', 'images/weather-app-large.jpg', 'A simple weather application that fetches real-time weather data using the OpenWeatherMap API. The user can search for weather conditions in any city, and the app displays current temperature, humidity, and a 5-day forecast.');
                    break;
                default:
                    console.error('Unknown project:', project);
            }
        });
    });
});
