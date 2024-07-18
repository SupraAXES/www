/* Load blog content */
function loadBlogContent() {
    var blogContent = document.getElementById('blog-content');
    var activeSelection = document.querySelector('.service-filter-list li.active');
    var selectedFile = activeSelection.getAttribute('value');
    var blogContentUrl = '/assets/blogs/' + selectedFile;

    fetch(blogContentUrl)
        .then(response => response.text())
        .then(data => {
            var blogContentHtml = '';
            var blogFiles = data.split('\n');
            blogFiles.forEach(blogFile => {
                fetch(blogContentUrl+ blogFile)
                    .then(response => response.text())
                    .then(blogData => {
                        blogContentHtml += blogData;
                        blogContent.innerHTML = blogContentHtml;
                    });
            });
        });
}

loadBlogContent(); // Call the function to run it automatically