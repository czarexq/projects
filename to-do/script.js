main_list = document.getElementById("main_list");
u_input = document.getElementById("user_input");




function add_task() {
    let new_li = document.createElement('li');
    new_li.innerHTML = u_input.value 
    main_list.appendChild(new_li)
    u_input.value = null;

    new_li.onclick = () => {
      new_li.remove();
    }
}

