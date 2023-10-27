const {Router} = require('express');

const postRouter = Router();

postRouter.post('/:id', (req, res)=>{
    res.status(200).send('Aca crea toda la info')
});


module.exports = postRouter;