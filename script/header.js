// list of pages that show up in the navbar where i is the html ID, fpath is the file path (make sure to start with / for absolute path!), and dtext is the text that shows up in the navbar!
let pages = [{i:"index", fpath:"/index.html", dtext:"Home"},
             {i:"Challenges", fpath:"/html/challenges.html", dtext:"Challenges"},
            ]

let h1 = `
<div class="container-fluid pt-5 px-5">
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-between py-3 mb-4 border-bottom">
    <!-- Header Section 1 -->
    <a href="/index.html" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"><img
        src="/assets/KeyPointsLogo.png" alt="PTC Logo" width="60" height="60"></a>
    <!-- Header Section 2 -->
    <ul class="nav col-12 ps-3 col-xl-auto mb-2 justify-content-center mb-lg-0">
      <!--Navbar in header-->
      <nav class="navbar navbar-expand-md bg-white p-0">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end bg-white has-oc" tabindex="-1" id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel">
          <ul class="navbar-nav flex-wrap me-auto justify-content-center mb-2 mb-lg-0">
`;

var litems = '';
var path = window.location.pathname;
var page = path.split("/").pop().replace('.html', '');

// generate the navbar list items based on the pages list 
for (i = 0; i < pages.length; i++) {
  litems += '<li class="nav-item"><a id="' + pages[i].i + '" class="nav-link';
  if (pages[i].i == page) {
    litems += ' active" aria-current="page';
  } else {
    litems += '" href="' + pages[i].fpath;
  }
  litems += '">' + pages[i].dtext + '</a></li>';
}

let h2 = ``;

document.getElementById("header").innerHTML = h1 + litems;