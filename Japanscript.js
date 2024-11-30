const articles = document.querySelectorAll("article");
    const prevBtn = document.getElementById("cprev");
    const nextBtn = document.getElementById("cnext");
    const currentPage = document.getElementById("cpagecurrent");
    const totalPage = document.getElementById("cpagetotal");

    let currentIndex = 0;
    const totalArticles = articles.length;

    // Initialize total page number
    totalPage.textContent = totalArticles;

    function updatePage() {
      // Update transform for articles
      const offset = currentIndex *-100;//将当前页面移动到视图框内
      articles.forEach((article) => {
        article.style.transform = `translateX(${offset}%)`;
        article.style.transition = "transform 0.5s ease";

      });

      // Update current page number
      currentPage.textContent = currentIndex + 1;

      // Disable buttons if at bounds
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalArticles - 1;
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updatePage();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalArticles-1) {
        currentIndex++;
        updatePage();
      }
    });

    // Initial setup
    updatePage();

