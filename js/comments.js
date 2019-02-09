
urlC = 'http://127.0.0.7/wp-json/wp/v2/comments';


// setting  ui vars
const countComments = document.querySelector('.commentsCount');

const listComments = document.querySelector('#comments');



lista = '';

function loadData(urlC){
  
  console.log(urlC);

   

    $.getJSON(urlC, (comment) => {
        
         let i = 0 ;
        comment.map(c => {
            
            if (i<comment.length){
                lista +=`

                <tr>
                <td width="70">
                  <img src="${c.author_avatar_urls[48]}" alt="" class="responsive-img circle" style="width: 40px;margin-left:10px;">
                </td>
                <td>${c.content.rendered}</td>
                <td>
                  <a href="#!" class="green-text">
                    <i class="material-icons">done</i>
                  </a>
                  <a href="#!" class="red-text">
                    <i class="material-icons">close</i>
                  </a>
                </td>
                </tr>
                
                `;
            }
            i++;
        });
        countComments.innerHTML = comment.length;
        console.log('comments', lista);
        listComments.innerHTML = lista;
        lista = '';

        //comments = comment;
  
    });

    

  
}

loadData(urlC);

