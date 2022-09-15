'use strict';
const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.article');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /*  [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /*  [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);


    /*  [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
console.log(links);

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /*  [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    function cleartitleList() {
        document.querySelector(optTitleListSelector).innerHTML = '';
    }
    cleartitleList();
    console.log(optTitleListSelector);
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for (let article of articles) {
        article.classList.remove('active');
        /* get the article id */
        const articleID = clickedElement.getAttribute('article');
        console.log(articleID);
        /* find the title element */
        const titleElement = document.querySelector(articleID);
        console.log(titleElement);
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
        /* insert link into titleList */
        html = html + linkHTML;
    }
    titleList.innerHTML = html;
}
generateTitleLinks();