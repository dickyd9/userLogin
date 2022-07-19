const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Router Test')
  })

module.exports = router;
