function getPosts(cb) {
  return fetch('/posts.json', {
    accept: 'application/json',
  }).then(checkStatus)
    .then(cb);
}

function checkStatus(response) {
  console.log(response);
  if (response.status > 200 && response.status < 300) {
    return response.json();
  }
}

const Client = { getPosts };
export default Client;
