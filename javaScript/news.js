const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories(data.data))

}

const showCategories = data =>{
    // console.log(data);
    const categoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory =>{
        
        /* shorthand way */
        // categoriesContainer.innerHTML += `<a class="nav-link" href="#">${singleCategory?.category_name}</a>`

        /* genarel way */
        const linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a onclick="fetchCategoryNews('${singleCategory.category_id}','${singleCategory?.category_name}')"class="nav-link" href="#">${singleCategory?.category_name}</a>`
        categoriesContainer.appendChild(linkContainer);
    })
}

//fetch all newses available in a category
const fetchCategoryNews = (categary_id,category_name ) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${categary_id}`
    
    fetch(url)
     .then(res => res.json())
     .then(data => showAllNews(data.data, category_name))


    // console.log(url);
    // console.log(categary_id);
}
const showAllNews = (data,category_name) =>{
    console.log(data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name;
}
fetchCategories();

