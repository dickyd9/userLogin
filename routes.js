const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Index Routes')
  })

export default router
