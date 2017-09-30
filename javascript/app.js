$(document).ready(function(){

  // Load home page
  $('#target').load('views/pages/home.html');

});

// Handle click on Apresentação button of the navbar
$('li:has(a[href="#apresentacao"])').click(function () {
  $('#target').load('views/pages/home.html');
  $('#breadcrumbs').html(generateBreadcrumbs(["Home", "Apresentação"]))
})

// Handle click on Contexto button of the navbar
$('li:has(a[href="#contexto"])').click(function () {
  $('#target').load('views/pages/contexto.html');
  $('#breadcrumbs').html(generateBreadcrumbs(["Home", "Contexto"]))
})

// Responsible for generate breadcrumbs based on an array of names
function generateBreadcrumbs(breadcrumbsNamesArray){
  var breadcrumbsHtml = '';
  breadcrumbsNamesArray.forEach(function (name) {
    breadcrumbsHtml += '<a href="#!" class="breadcrumb">' + name + '</a>\n';
  });

  console.log('BREADCRUMBS ' + breadcrumbsHtml);

  return breadcrumbsHtml;
}