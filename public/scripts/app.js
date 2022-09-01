// Client facing scripts here

$(document).ready(() => {

  const createGameElement = function (gameData) {
    return `<div class="searched-games">
    <h3>${gameData.name}</h3>
    <img class="game-1-pic"
      src="${gameData.cover_photo_url}">
    <h3>$ ${gameData.price.toFixed(2)}</h3>
    <h3>${gameData.rating ? gameData.rating + '&#11088' : 'No ratings available'}</h3>
    <p>${gameData.description}</p>
    <form id="favourite">
    <div id="fav-email">
    <input type="hidden" name="gameId" value=${gameData.id}>
    <button type="submit" class="fav-button">Add to favourite</button>
    </form>
    <form action='/api/email/${gameData.admin_id}' method=POST>
    <button type="submit" class="email-button">Email me</button>
    </div>
    </form>
  </div>`
  }

  $('#search_video_game_listings').submit(function (event) {
    event.preventDefault();

    const formData = $(this).serialize(); // serialize return obj
    console.log(formData);

    $.ajax('/api/result', {

      method: 'GET',  // http method
      data: formData  // data to submit

    })
      .then(function (results) {
        $('#results-container').html(" ");
        for (let item of results.games) {
          $('#results-container').append(createGameElement(item));
        }
      })
  })



  $('.sold').click(function (event) {

    $.post('/api/sold', {
      gameId: $(event.target).data("gameId")
    })
      .then((results) => {
        $('#alert').hide().text(results).slideDown(1000).slideUp(3000);
      })
  })



  $('.delete').click(function (event) {
    $.post('/api/delete', {
      gameId: $(event.target).data("gameId")
    })
      .then(() => {
        window.location.replace('/api/listing');
      })
  })



  $('body').on('submit', '#favourite', function (event) {

    event.preventDefault();

    const formData = $(this).serialize(); // serialize return obj
    console.log(formData);

    $.ajax('/api/favourites', {

      method: 'POST',
      data: formData
    })
      .then(function (results) {
        window.location.replace('/api/favourites');
      })
  })



  $('body').on('submit', 'email-button', function (event) {

    event.preventDefault();

    $.ajax('/api/favourites', {

      method: 'POST',
      data: formData

    })
      .then(function (results) {
        window.location.replace('/api/favourites');
      })
  })

})
