let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    let category = event.category;
    let name = event.name;
    let capacity = event.capacity;
    let assistance = event.assistance;
    let estimate = event.estimate;


        //Event statics//
    /*let contador = 0;
    for (let i = 0; i < event.length; i++) {
        contador++;
    }
    console.log(contador);

        //Upcoming events statics by category//
    /*if (eventDate > currentDate) {

    }

        //Past events statics by category//
    if (eventDate < currentDate) {

    }


    /*if (eventDate < currentDate) {
        htmlEvents += `<div class="card">
     <img src="${event.image}" alt="">
     <h3>${event.name}</h3>
     <p>${event.description}</p>
</div>`;
   }*/
}
    console.log()