/*
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista */
var app = new Vue({
  el: "#app",
  data: {
    toDoList : ["pulire la stanza", "dare l'acqua alle piante", "fare la lavatrice"]
  },
  methods: {
    deleteItem : function(array, index){
      array.splice(index, 1);
    }
  }

});
