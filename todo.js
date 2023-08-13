const darkmod = document.getElementById('dark');
const light1 = document.getElementById('light');
const body1 = document.getElementById('body');
const body = document.getElementById('bodyn');
const chan = document.getElementById('chan');
const comp = document.getElementById('comp');
const tcomp = document.getElementById('tcomp');
const input = document.getElementById('input');
const ncomp = document.getElementById('ncomp');
const ncomp1 = document.getElementById('ncomp1');
const todo = document.getElementById('todo'); 




// Light mode icon animation toggle
darkmod.addEventListener ('mouseenter', onmouseenter1)
function onmouseenter1 (o){
    o.preventDefault();
    if(darkmod.classList.contains('cursor-pointer')){
        darkmod.classList.add('animate-spin');
        setTimeout(() => {
            darkmod.classList.remove('animate-spin');},1000);

         }
} 
// Dark mode icon animation toggle
light1.addEventListener ('mouseenter', onmouseenter)
function onmouseenter (p){
    p.preventDefault();
    if(light1.classList.contains('cursor-pointer')){
        light1.classList.add('animate-spin');
        setTimeout(() => {
            light1.classList.remove('animate-spin');},800);

         }
} 



// Dark mode toggle/ background media query toggle
darkmod.addEventListener ('click', darkmode)
function darkmode (d){
    d.preventDefault();
    if(light1.classList.contains('hidden') || (window.matchMedia('(min-width: 640px)').matches && window.matchMedia('(max-width: 767px)').matches)){
        darkmod.classList.add('hidden');
        light1.classList.remove('hidden');
        body.classList.replace('bg-slate-200', 'bg-gray-950');
        body.classList.add('transition','ease-in-out', 'delay-300');
        chan.classList.add('text-white');
        chan.classList.add('transition','ease-in-out', 'delay-200');
        comp.classList.add('text-white');
        comp.classList.add('transition','ease-in-out', 'delay-200');
        input.classList.add('bg-gray-800', 'placeholder:text-white', 'text-white');
        input.classList.add('transition','ease-in-out', 'delay-100');
        tcomp.classList.add('bg-gray-800');
        tcomp.classList.add('transition','ease-in-out', 'delay-150');
        ncomp.classList.add('bg-gray-800');
        ncomp.classList.add('transition','ease-in-out', 'delay-200');
        ncomp1.classList.add('bg-gray-800');
        ncomp1.classList.add('transition','ease-in-out', 'delay-200');
        todo.classList.add('text-black');
}} 

darkmod.addEventListener ('click', changebackground)
function changebackground (u){
    u.preventDefault();
    if (window.matchMedia('(max-width: 639px)').matches) {
    body1.style.backgroundImage = 'url("/todoApp/images/bg-mobile-dark.jpg")';   
    }else if (window.matchMedia('(min-width: 640px)').matches && window.matchMedia('(max-width: 1500px)').matches) {
    body1.style.backgroundImage = 'url("/todoApp/images/bg-desktop-dark.jpg")';      
}}



// Light mode toggle/ background media query toggle
light1.addEventListener ('click', lightmode)
function lightmode (ev){
    ev.preventDefault();
    if(darkmod.classList.contains('hidden')){
        light1.classList.add('hidden');
        darkmod.classList.remove('hidden');
        body.classList.replace('bg-gray-950', 'bg-slate-200');
        chan.classList.remove('text-white');
        comp.classList.remove('text-white');
        input.classList.remove('bg-gray-800','placeholder:text-white', 'text-white');
        tcomp.classList.remove('bg-gray-800');
        ncomp.classList.remove('bg-gray-800');
        ncomp1.classList.remove('bg-gray-800');
        todo.classList.remove('text-black');
}} 

light1.addEventListener ('click', changebackground1)
function changebackground1 (l){
    l.preventDefault();
    if (window.matchMedia('(max-width: 639px)').matches) {
    body1.style.backgroundImage = 'url("/todoApp/images/bg-mobile-light.jpg")';   
    }else if (window.matchMedia('(min-width: 640px)').matches && window.matchMedia('(max-width: 1500px)').matches) {
    body1.style.backgroundImage = 'url("/todoApp/images/bg-desktop-light.jpg")';      
}}







let completedTasksCount = 0
let activeTasksCount = 0
const todolist = document.getElementById('todolist'); 
const clear = document.getElementById('clear'); 
const clear1 = document.getElementById('clear1'); 
// creating the todo elements and assigning various functions
// -------------------------------------------------------------------------------------------------------------------------------
function createTodoElement (todoText) {

  const todoItem = document.createElement('li');
  todoItem.className = 'h-12 w-[90%] ml-5  md:ml-[32.5%] md:w-[37%] drop-target draggable-element cursor-grab px-5 bg-white opacity-90 text-black py-2.5 mt-0.5 text-md rounded-md shadow-xl';
  const todoTextElement = document.createElement('span');
  todoTextElement.textContent = todoText;

  // dark mode for new todos
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && input.classList.contains('bg-gray-800')) {
        if (input.classList.contains('bg-gray-800')) {
          todoItem.classList.add('bg-gray-800', 'text-gray-300');
          todoItem.classList.remove('bg-white'); 
        }}});
    
// creating checkbox for todos
const radio = document.createElement('radio');
    radio.type = "checkbox"
    radio.innerHTML =  `<input id="idrad" type="checkbox" class="w-5 h-5 rounded-full  mr-3  " name="option" value="option1">`
      radio.addEventListener('click', () => {
        todoItem.classList.toggle('line-through');
      });



//All, active, completed & clear completed toggle  ***********************

active.addEventListener('click', () => {
  const completedTasksCount = document.querySelectorAll('.line-through').length;
  const activeTasksCount = sum - completedTasksCount;
    if (todoItem.classList.contains('line-through')) {
      todoItem.classList.add('hidden');
      tcomp.classList.add("hidden");
      changetext();

    }else{
      todoItem.classList.remove('hidden');
      tasksum.innerHTML = `<p>${activeTasksCount} items left</p>`
      tasksum1.innerHTML = `<p>${activeTasksCount} items left</p>` 

      
    }
});


compd.addEventListener('click', () => {
  const completedTasksCount = document.querySelectorAll('.line-through').length;
  if (!todoItem.classList.contains('line-through')) {
    todoItem.classList.add('hidden'); 
  
    
  } else if(completedTasksCount === 0){
    tcomp.classList.remove("hidden");
    
  }else{
    todoItem.classList.remove('hidden');
    tasksum.innerHTML = `<p>${completedTasksCount} items Completed</p>` 
    tasksum1.innerHTML = `<p>${completedTasksCount} items Completed</p>` 

  } 
});


all.addEventListener('click', () => {
  if (!todoItem.classList.contains('line-through') || todoItem.classList.contains('line-through')) {
    todoItem.classList.remove('hidden'); 
    tcomp.classList.add("hidden");
    updatetasksum();
    changetext();
  }
  
});

clear.addEventListener('click', () => {
  if (todoItem.classList.contains('line-through')) {
    todolist.removeChild(todoItem);
    tcomp.classList.remove('hidden');
    todoItem.classList.add('hidden'); 
    sum--; 
    updatetasksum();
    changetext();
  } 
});

clear1.addEventListener('click', () => {
  if (todoItem.classList.contains('line-through')) {
    todolist.removeChild(todoItem);
    tcomp.classList.remove('hidden');
    todoItem.classList.add('hidden'); 
    sum--; 
    updatetasksum();
  } 
});
// ***************************************************************************************

// Delete button for each created todos
const deleteButton = document.createElement('deletebutton');
     deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-[-24] ml-[92%]">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg> `;
    deleteButton.addEventListener('click', () => {
    todolist.removeChild(todoItem);
    sum--; 
    updatetasksum();
    changetext();
  });

  
// assigning or appending each element to be in each todos
todoItem.appendChild(radio);
todoItem.appendChild(todoTextElement);
todoItem.appendChild(deleteButton);

todoItem.draggable = true;
// darkmode & lightmode for todos
  darkmod.addEventListener('click', () => {
    todoItem.classList.add('bg-gray-800');
    todoItem.classList.add('text-gray-300');
    todoItem.classList.remove('bg-white');
    todoItem.classList.add('transition','ease-in-out', 'delay-200');
  });


  light1.addEventListener('click', () => {
    if (!input.classList.contains('bg-gray-800')){
    todoItem.classList.add('bg-white');
    todoItem.classList.remove('bg-gray-800');
    todoItem.classList.remove('text-gray-300');
    
  }});

  
  return todoItem;

  
}
// ---------------------------------------------------------------------------------------------------------------------


const tasksum = document.getElementById('tasksum');
const tasksum1 = document.getElementById('tasksum1');
let sum = 0
// input function for keypress
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      const todoText = input.value.trim();
      const todoElement = createTodoElement(todoText);
      tcomp.classList.add('hidden');
      todolist.appendChild(todoElement);
      input.value = '';

      sum++;
      updatetasksum();
    }
  });
 
// Displaying the sum of tasks
function updatetasksum(){
   tasksum.innerHTML =`<P> ${sum} items left<P>`;
   tasksum1.innerHTML =`<P> ${sum} items left<P>`;
}
// Chaning the text of the task
function changetext() {
  if(sum === 0){
    tcomp.classList.remove('hidden');
    tasksum.innerHTML =`<P>No Tasks at all<P>`;
    tasksum1.innerHTML =`<P>No Tasks at all<P>`;
  }
}


const active = document.getElementById('active');
const comp2 = document.getElementById('comp2');
const all = document.getElementById('all');
const compd = document.getElementById('compd');

// all active and completed toggle for home screen
active.addEventListener('click', () => {
  comp.innerHTML = `<P>No active tasks found:<P>`;
  comp2.innerHTML = `<P>You don't have active tasks!<P>`;
  active.classList.add('text-sky-500');
  all.classList.remove('text-sky-500');
  compd.classList.remove('text-sky-500');
  clear.classList.remove('text-sky-500');
  clear1.classList.remove('text-sky-500');
});

all.addEventListener('click', () => {
  comp.innerHTML = `<P>No items found:<P>`;
  comp2.innerHTML = `<P>So bad... You need to get back to work!<P>`;
  all.classList.add('text-sky-500');
  active.classList.remove('text-sky-500');
  compd.classList.remove('text-sky-500');
  clear.classList.remove('text-sky-500');
  clear1.classList.remove('text-sky-500');
});

compd.addEventListener('click', () => {
  comp.innerHTML = `<P>No completed tasks found:<P>`;
  comp2.innerHTML = `<P>So bad... You need to get back to work!<P>`;
  compd.classList.add('text-sky-500');
  all.classList.remove('text-sky-500');
  active.classList.remove('text-sky-500');
  clear.classList.remove('text-sky-500');
  clear1.classList.remove('text-sky-500');
});

clear.addEventListener('click', () => {
  comp.innerHTML = `<P>No completed tasks found:<P>`;
  comp2.innerHTML = `<P>So bad... You need to get back to work!<P>`;
  clear.classList.add('text-sky-500');
  compd.classList.remove('text-sky-500');
  all.classList.remove('text-sky-500');
  active.classList.remove('text-sky-500');
});

clear1.addEventListener('click', () => {
  comp.innerHTML = `<P>No completed tasks found:<P>`;
  comp2.innerHTML = `<P>So bad... You need to get back to work!<P>`;
  clear1.classList.add('text-sky-500');
  compd.classList.remove('text-sky-500');
  all.classList.remove('text-sky-500');
  active.classList.remove('text-sky-500');
});


