$(() => {

  const $searchGamesForm = $(`
  <form action="/result" method="get" id="search-games" class="search-games-class">
      <div class="search-games-form-wrapper">
        <label for="search-games-form-name">Name</label>
        <input type="text" name="games" placeholder="&#127918" id="search-games-by-name">
      </div>

      <div class="search-games-form-wrapper">
        <label for="search-games-price">Maximum Price</label>
        <input type="number" name="maximum_price" placeholder="&#128176" id="search-games-by-price">
      </div>

      <div class="search-games-form-wrapper">
        <label for="search-games-rating">Lowest Rating</label>
        <input type="number" name="lowest_rating" placeholder="&#11088" id="search-games-by-rating">
      </div>

      <div class="search-games-form-wrapper">
          <button>Search</button>
      </div>
    </form>
  `)
  window.$searchGamesForm = $searchGamesForm;

  $searchGamesForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    getFilteredListings(data).then(function( json ) {
      gameListings.addListing(json.video_game_listings);
      views_manager.show('listings');
    });
  });

  $('body').on('click', '#search-games', function() {
    views_manager.show('games');
    return false;
  });

});
