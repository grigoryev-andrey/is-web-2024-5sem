document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");

  async function loadPosts() {
    try {
      const response = await fetch("https://dummyjson.com/posts?limit=100");
      if (!response.ok) throw new Error("Ошибка загрузки постов");
      const data = await response.json();
      let posts = data.posts;
      posts = posts.sort(() => Math.random() - 0.5).slice(0, 10);

      while (blogList.firstChild) {
        blogList.removeChild(blogList.firstChild);
      }
      posts.forEach(post => {
        blogList.appendChild(createBlogCard(post));
      });
    } catch (e) {
      while (blogList.firstChild) {
        blogList.removeChild(blogList.firstChild);
      }
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = "⚠ Не удалось загрузить блог. Попробуйте позже.";
      blogList.appendChild(errorDiv);
      console.error(e);
    }
  }

  function createBlogCard(post) {
    const card = document.createElement("article");
    card.className = "blog-card";

    const title = document.createElement("h2");
    title.className = "blog-card-title";
    title.textContent = post.title;

    const body = document.createElement("p");
    body.className = "blog-card-body";
    body.textContent = post.body;

    card.appendChild(title);
    card.appendChild(body);

    return card;
  }

  loadPosts();
});