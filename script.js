const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminPanel = document.getElementById("adminPanel");
const passwordModal = document.getElementById("passwordModal");
const submitPasswordBtn = document.getElementById("submitPasswordBtn");
const passwordInput = document.getElementById("passwordInput");
const addPostBtn = document.getElementById("addPostBtn");
const closeAdminBtn = document.getElementById("closeAdminBtn");
const postsContainer = document.getElementById("posts");

adminLoginBtn.addEventListener("click", () => {
    passwordModal.classList.remove("hidden");
});

submitPasswordBtn.addEventListener("click", () => {
    const password = passwordInput.value;
    if (password === "1234") {
        passwordModal.classList.add("hidden");
        adminPanel.classList.remove("hidden");
        passwordInput.value = "";
    } else {
        alert("סיסמה שגויה");
    }
});

addPostBtn.addEventListener("click", () => {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    if (title && content) {
        const newPost = document.createElement("article");
        newPost.classList.add("post");

        const postTitle = document.createElement("h2");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        newPost.appendChild(postTitle);
        newPost.appendChild(postContent);
        postsContainer.prepend(newPost);

        // ניקוי שדות
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
    } else {
        alert("יש למלא כותרת ותוכן");
    }
});

closeAdminBtn.addEventListener("click", () => {
    adminPanel.classList.add("hidden");
});