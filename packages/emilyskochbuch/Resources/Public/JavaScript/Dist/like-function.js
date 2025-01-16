document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");

    console.log(likeButtons);
    likeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            console.log(button);
            const heartIcon = button.querySelector(".heart-icon");
            const likeCounter = button.nextElementSibling;
            const recipeId = likeCounter.getAttribute("data-id");
            let likes = parseInt(likeCounter.getAttribute("data-likes")) || 0;

            // Toggle the heart icon and update like count
            if (heartIcon.classList.contains("empty")) {
                heartIcon.classList.remove("empty");
                heartIcon.classList.add("filled");
                likes += 1;
            } else {
                heartIcon.classList.remove("filled");
                heartIcon.classList.add("empty");
                likes -= 1;
            }

            likeCounter.textContent = likes;
            likeCounter.setAttribute("data-likes", likes);

            // Send like data to the server
            fetch('/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uid: recipeId,
                    likes: likes,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Like data saved successfully!", data);
                })
                .catch((error) => {
                    console.error("Error saving like data:", error);
                });
        });
    });
});
