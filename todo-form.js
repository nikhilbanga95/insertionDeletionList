const formTodo = document.querySelector(".form-todo");
const text=document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(text);
// console.log(formTodo)
formTodo.addEventListener("submit",(e) => {
  e.preventDefault();/*prevents the page from refreshing when submitted*/
  // console.log(text.value);
  const newText = text.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = 
    `<span>
      ${newText}          
      </span>
      <div>
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
      </div>`;
  newLi.innerHTML = newLiInnerHtml;
  // console.log(newLi);
  todoList.prepend(newLi);
  text.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")){
    const removedLi = e.target.parentNode.parentNode;
    // console.log(removedLi);
    removedLi.remove(); 
  }
  else if(e.target.classList.contains("done")){
  // console.log("Great ..!!");
  const liSpan = e.target.parentNode.previousElementSibling;
  liSpan.style.textDecoration = "line-through";
;}
})