'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = 'post-author',
  optTagsListSelector = '.tags';

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
};

function generateTitleLinks(customSelector = '') {

  /*  [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  console.log(customSelector);

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

  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split('');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      //console.log(tag);
      /* generate HTML of the link */
      const linkHTMLTag = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log(linkHTMLTag);
      /* add generated code to html variable */
      html = html + linkHTMLTag;
      /* [NEW] check if this link is NOT already in allTags */
      if (allTags.indexOf(linkHTMLTag) == -1) {
        /* [NEW] add generated code to allTags array */
        allTags.push(linkHTMLTag);
      }
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const linksActive = document.querySelectorAll('active');
  /* START LOOP: for each active tag link */
  for (link of linksActive) {
    console.log(link);
    /* remove class active */
    link.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let eachfound of allLinks) {
    /* add class active */
    eachfound.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
tagClickHandler();

function addClickListenersToTags() {
  /* find all links to tags */
  const allTagLinks = document.querySelectorAll('href');
  /* START LOOP: for each link */
  for (let link of allTagLinks)
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click, tagClickHandler');
  /* END LOOP: for each link */
}

addClickListenersToTags();

function generateAuthors() {
  /* find all authors articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for each articles */
  for (let article of articles) {
    /* find author*/
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* get author atribute*/
    const author = article.getAttribute('data-author');
    /* generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
    /* add author  */
    authorWrapper.innerHTML = linkHTML;
    /* END LOOP: for every article */
  }
}
generateAuthors();
