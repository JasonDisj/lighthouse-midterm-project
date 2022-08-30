// Client facing scripts here

$(document).ready(() => {

  const createGameElement = function (gameData) {
    return `<div class="new-games">
    <h3>${gameData.name}</h3>
    <img class="game-1-pic"
      src="${gameData.cover_photo_url}">
    <h3>$ ${gameData.price.toFixed(2)}</h3>
    <h3>&#11088&#11088&#11088&#11088&#11088</h3>
    <p>${gameData.description}</p>
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
        console.log(results);
        for (let item of results.games) {
          $('#results-container').append(createGameElement(item));
        }
      })
  })


  $('#newlisting').submit(function (event) {
    event.preventDefault();

  })





})
