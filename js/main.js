
urlPosts = 'http://127.0.0.7/wp-json/wp/v2/posts';
urlComments = 'http://127.0.0.7/wp-json/wp/v2/comments';
urlUsers = 'http://127.0.0.7/wp-json/wp/v2/users';


// setting  ui vars
const countPost = document.querySelector('.postsCount');
const countComments = document.querySelector('.commentsCount');
const countUsers = document.querySelector('.usersCount');
const lastestPosts = document.querySelector('#lastestPosts');
const lastestComments = document.querySelector('#lastestComments');

// setting users pages
const usersList = document.querySelector('#usersList');






posts = [];
comments = [];
users = [];


postsLen = 0;

lista = '<li class="collection-header"><h5>Latest Comments</h5></li>';
listaPosts = '';
listaUsers = '';

function loadData(urlP, urlC, urlU){
  
  
    $.getJSON(urlP, (post) => {
        
        let i = 0;


       post.map((p) => {

        if (i<3){
            listaPosts += ` 
               <tr>
                  <td>${p.title.rendered}</td>
                  <td>${p.categories}</td>
                  <td>
                      <a href="${p.link}" class="btn blue lighten-2">Details</a>
                  </td>
               </tr>`;
        }
        i++;
       });
        posts.push(post);

        countPost.innerHTML = post.length;

        lastestPosts.innerHTML = listaPosts;
       
        
    });

    $.getJSON(urlC, (comment) => {
        
         let i = 0 ;
        comment.map(c => {
            
            if (i<3){
                lista += ` 
                <li class="collection-item avatar">
                <img src="${c.author_avatar_urls[48]}" alt="" class="circle">
                <span class="title">${c.author_name}</span>
                <p class="truncate">${c.content.rendered}</p>
                <a href="" class="approve green-text">${c.status}</a> |
                <a href="" class="deny red-text">${c.status}</a>
              </li>`;
            }
            i++;
        });
        countComments.innerHTML = comment.length;

        lastestComments.innerHTML = lista;
        lista = '';

        comments = comment;
  
    });

    $.getJSON(urlU, (users) => {
        
        
                console.log(users);
                 
        users.map((u) => {
            console.log(u.name);
            
            listaUsers += ` 
            <tr>
                <td width="70">
                  <img src="${u.avatar_urls[48]}" alt="" class="responsive-img circle" style="width: 40px;margin-left:10px;">
                </td>
                <td>${u.name}</td>
                <td></td>
                <td></td>
                <td>
                  <a href="${u.link}" class="btn blue lighten-2">Details</a>
                </td>
            </tr>
              `;
            
           
        });

        countUsers.innerHTML = users.length;
        usersList.innerHTML = listaUsers;
        
    });

  
}

loadData(urlPosts, urlComments, urlUsers);

