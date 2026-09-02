const root = document.getElementById('root');
const button =  document.getElementById('btn');
console.log(root);

const h2= document.createElement('h2');
const img = document.createElement('img');

function showData(){
    try {
        h2.innerText="Welcome to dom";
        h2.style.color="red";
        h2.style.backgroundColor="cyan";
        img.src="https://i.redd.it/the-greatest-estate-developer-any-recommendations-similar-v0-4y5kwsr4uwhb1.jpg?width=1080&format=pjpg&auto=webp&s=40ab53cb99459955d0222935b0268758f234d790";

        img.setAttribute('height', 200);
        img.setAttribute('width', 200);

        root.appendChild(img);
        root.appendChild(h2);
    } catch (error) {
        console.log(error);
        
    }finally{
      button.remove()
    }
 
}

button.addEventListener('click', showData);