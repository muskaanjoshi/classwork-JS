function searching()
 {
  var input, filter, ul, li, x, i, txt; input=document.getElementById('search-movies');
  filter = input.value.toUpperCase();
  ul = document.getElementById("movie-list");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) 
  {
    x = li[i].getElementsByTagName("span")[0];
    txt = x.textContent || x.innerText;
       if (txt.toUpperCase().indexOf(filter) > -1) 
             {
               li[i].style.display = "";
              }
     else {
                 li[i].style.display = "none";
              }
  }
}
//adding onkeyup="searching()" to search field's code
