for (let event of data.events) {
    let image = event.image;
    let name = event.name;
    let description = event.description;
    let price = event.price;

let newCard = `<div class="card h-100">
        <img src="${event.image}" class="card-img-top" alt="party">
        <section class="card-body">
        <h5 class="cardtitle">${event.name}</h5>
        <p class="cardtext">${event.description}</p>
        </section>
        <div class="cardfooter">
        <p>Price $ ${event.price}</p>
        <button type="button" class="btn btn-secondary">Ver mas...</button>
        </div>
        </div>`;
    document.querySelector('.row').innerHTML += newCard;
}