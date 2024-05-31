Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente


SCOMPOSIZIONE


Creo un array di oggetti e aggiungo degli elementi con le proprietà: text e done.
Aggiungo gli elementi utili nell'HTML
Creo un ciclo for nel "li" per creare un elemento per ogni task
Creo una funzione che imposterà done = true e come conseguenza il testa sarà sbarrato
Aggiungo un tasto bin e creo una funzione che al click cancellerà la task corrispondente al suo index
Aggiungo nuovi elementi all'HTML tra cui un imput dove verranno scritte le nuove task ed un pulsante 
Creo una funzione che pusha un nuovo elemento dentro l'array tasks, dove ogni elemento ha le stesse proprietà delle altre già esistenti
