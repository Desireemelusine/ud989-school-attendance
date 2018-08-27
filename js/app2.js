///////model

var model ={
  students:[
    {
    name : "Slappy the Frog",
    missedDays : 0
    },
    {
    name : "Lilly the Lizard",
    missedDays : 0
    },
    {
    name : "Paulrus the Walrus",
    missedDays : 0
    },
    {
    name : "Gregory the Goat",
    missedDays : 0
    },
    {
    name : "Adam the Anaconda",
    missedDays : 0
    }
  ]
};

//////octopus
var octopus = {
  // ele trará a lista de todos os students sem entrar no index específico
  getAllStudentModel: function() {
   return model.students;
   tableView.init();
 },
  // increment o número de faltas
  getMissedDays: function() {
    model.students.missedDays++;
    tableView.render();
  }

};

//////view
 var tableView = {
   init : function(){
    //atribuição de DOM
    var allStudents = octopus.getAllStudentModel();
    var elemListN;
    var elemListI;
    var elemListT;
    var x = 12;
/*
    for(var i = 0; i < allStudents.length; i++){
      var student = allStudents[i];
      elemListN = document.getElementById('name')
      elemListN.textContent = student.name;
      elemListT = document.getElementById('totalDays');
      elemListT.textContent = student.missedDays;
    };*/
    /////////////////////////////

/* nesse for loop, construimos os DOM's. Para student que passar pelo loop,
 dentro do ID Student, criamos uma lista de estudantes: com nome, depis criamos um  for loop
 dentro do for para criar os check presence ( 12 no total) e adicioamos a propriedade
 de input. No fim do loop, criamos o total attendance  com a indo do missedDays.
  E fazemos appendChild de tudo isso.
*/
var elemListS = document.getElementById('student');
    for(var i = 0; i < allStudents.length; i++){
      var student = allStudents[i];
      elemListN.createElement('td');
      elemListN.textContent = student.name;

        for (var i = 0; i <= x; i++) {
          var index = x[i];
          elemListI.createElement('td');
          elemListI.textContent = index + '<input class="c" type="checkbox">';
        };

      elemListT.createElement('td');
      elemListT.textContent = student.missedDays;

      // anexar tudo no HTML
      elemListS.appendChild(elemListN);
      elemListS.appendChild(elemListI);
      elemListS.appendChild(elemListT);
    };
    this.render();
  },
    render : function(){
      // counter
      /*ele coloca o  atributo em cada input(class) e  diz ao octoups para atualizar
      */
      var studentCheckDays = this.elemListI;
      this.studentCheckDays.addEventListener('click',function(){
        this.elemListT = octopus.getMissedDays();
      });
    }

};

octopus.getAllStudentModel();
