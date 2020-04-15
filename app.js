// const apiKey = '85a5c3f67a9c4ca4a4f71870f18c31ba';

function getRepos(user) {
  const url = `https://api.github.com/users/${user}/repos`;

  const options = {headers: new Headers({Accept: 'application/vnd.github.v3+json'})};

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.text());
    })
    .then((responseJson) => console.log(responseJson))
    .catch((err) => {
      console.log(err);
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

$('#js-form').on('submit', function (event) {
  let user = $('#js-search-term').val();
  console.log('i ran');
  event.preventDefault();
  console.log(user);
  getRepos(user);
  $('#js-search-term').val('');
  $('#js-error-message').empty();
});

$(getRepos);