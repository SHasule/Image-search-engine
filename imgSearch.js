const accessKey=`kjWR0zIAmwRSOISG6XkPvYv2idCe0zOyFW19mpYz8Lw`;
const search_Form=document.getElementById("search-form");
const search_Box=document.getElementById("Search-box");
const search_result=document.getElementById("search-result");
const show_more_btn=document.getElementById("show-more-btn");


 let keyword=""
 let page=1

  async function searchImages() {
    keyword=search_Box.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword} 
    &client_id=${accessKey}&per_page=12` 
    const response=await fetch(url);
  const data = await response.json()

  if(page===1){
    search_result.innerHTML=""
  }
   const results=data.results;

   results.map((result)=>{
    const image=document.createElement("img")
    image.src=result.urls.small;
    const imagelink=document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target="_blank";

    imagelink.appendChild(image);
    search_result.appendChild(imagelink)
   })
    show_more_btn.style.display="block"
  }
  search_Form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
  })

  show_more_btn.addEventListener("click",()=>{
    page++;
    searchImages()

  })