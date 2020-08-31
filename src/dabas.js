// JavaScript Document
const fetch = require("node-fetch");

function getPosts(){
	
	let endpoint = 'http://api.dabas.com/DABASService/V2/articles/searchparameter/apelsinmarmelad/XML?apikey=d49bc2ad-c016-459e-b009-0d26925506f3';
	
	fetch(endpoint).then(response => {console.log("response"+response)})
}

getPosts();
        /*.then((data=>{
          // Displaying it to the DOM
           let output = "<h3>Posts:</h3>"+
                       "<div class='form-group'>"+
                        // We will use this input later on to search for posts
                       "<input type='text' id='search' class='form-control' placeholder='search by title or ID..'>"+
                       "</div>";
            data.forEach(post => {
                output += `
            <ul class="list-group mb-3" id="${post.id}">
              <li class="list-group-item"><strong>ID:</strong> ${post.id}</li>
              <li class="list-group-item"><strong>Title:</strong> ${post.title}</li>
              <li class="list-group-item"><strong>Body:</strong> ${post.body}</li>
            </ul>
          `;
            });
           document.getElementById('posts').innerHTML = output;*/