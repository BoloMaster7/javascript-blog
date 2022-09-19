'use strict';
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
optArticleTagsSelector = '.post-tags .list';

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
    const activeArticles = document.querySelectorAll('.post');
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

function generateTitleLinks() {

    /*  [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for (let article of articles) {

        /* get the article id */
        const articleId = article.getAttribute('id');

        /* find the title */
        const titleElement = article.querySelector('.post-title');
        const articleTitle = titleElement.innerHTML;

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
        /* insert link into titleList */
        html = html + linkHTML; //'<a>Link1</a><a>Link2</a><a>Link1</a><a>Link1</a><a>Link1</a><a>Link1</a><a>Link1</a><a>Link1</a>'
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();

function generateTags() {
    /* find all articles */
    const articles = document.querySelectorall(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
        /* find tags wrapper */
        const titleList = article.querySelector(optArticleSelector);
        /* make html variable with empty string */
        let html = "";
        /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        console.log(articleTags);
    }
    /* split tags into array */
    const articleTagsArray = articleTags.split('');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
        console.log(tag);
        /* generate HTML of the link */
        const linkHTMLTag = '<ul>' + articleTags + '</ul>';
        console.log(linkHTMLTag);
        /* add generated code to html variable */
        html += linkHTMLTag;
        console.log(html);
        /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innterHTML = html;
    /* END LOOP: for every article: */
}

generateTags();