const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    //abaixo escrito codigo longo, correto mas longo
   // if (sidebar.classList.contains('show-sidebar')){
   //     sidebar.classList.remove('show-sidebar')
   // }
   // else{
   //     sidebar.classList.add('show-sidebar');
   // }
    //abaixo vers"ao curta com toggle
    //Apenas deixando anotado, para isso funcionar se atente ao CSS!É lá que é critico para tornar o JS fácil igual esse projeto.
   sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})