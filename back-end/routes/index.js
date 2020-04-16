const express = require('express');
const router = express.Router();

// GET index
router.get('/', (req, res) => {
	const context = {
		lists: 'a',
	}
	// res.render('index', context);
	res.set('Content-Type', 'text/html')
	res.send('<p>some html</p>');
});

router.get('/a', (req, res) => {
	const lists = {'a': '1'};

	res.json(lists);
});

module.exports = router;