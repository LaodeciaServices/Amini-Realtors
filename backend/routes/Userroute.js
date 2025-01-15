import express from 'express';

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('we are here now')
})

export default router;