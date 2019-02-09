urlCategories = 'http://127.0.0.7/wp-json/wp/v2/categories';


// setting  ui vars
//const countCat = document.querySelector('.categoriesCount');
const listCategories = document.querySelector('#listCategories');



list = '';


function loadData(urlCategories){
  
  
    $.getJSON(urlCategories, (cat) => {
        
        let i = 0;


       cat.map((c) => {

        
        if (i<cat.length){
            list += ` 
               <tr>
                  <td>${c.name}</td>
                  <td>${c.description}</td>
                  <td>${c.date}</td>
                  <td>
                      <a href="${c.link}" class="btn blue lighten-2">Details</a>
                  </td>
               </tr>`;
        }
        i++;

       });

       //console.log(post[0].content);
       
        //countCat.innerHTML = cat.length;

        listCategories.innerHTML = list;
       
        
    });

  
 
}


loadData(urlCategories);
