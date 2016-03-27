require('isomorphic-fetch');

async function middleware(req, res) {
   const {path} = req;
  try {
    const json = await fetch(`http://localhost:3000/${path}`);
    res.json(json);
  } catch(e) {
    res.status(e.status).send(e.response.text);
  }
}

module.exports = function() {
  const router = new (require('express').Router)();
  router.get('/players', middleware);

  return router;
};
