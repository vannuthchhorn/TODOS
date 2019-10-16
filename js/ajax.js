//declearation
const url ="https://raw.githubusercontent.com/radytrainer/demo007/master/cambodia.json";
const method = "GET";
const syncronous = true;
 
// create new object
const ajax = new XMLHttpRequest();
// open object
ajax.open(method, url, syncronous)
ajax.onload = () => {
    //response data
    const list =document.querySelector('.col-12');
    const data = JSON.parse(ajax.response);
    data.forEach(item => {
        todos.innerHTML +=`
            <ul class="list-group mt-4">
                <li class="list-group-item bg-success text-white ">${item.first_name}</li>
                <li class="list-group-item bg-success text-white ">${item.last_name}</li>
                <li class="list-group-item bg-success text-white ">${item.email}</li>
                <li class="list-group-item bg-success text-white ">${item.gender}</li>
            </ul>
        `;
    })
    
}
//send request data 
ajax.send();