const express = require('express');
const router = express.Router();
const Student = require('../models/news');
// Example route
router.get('/', (req, res) => {
    res.send('Hello from the /new route');
});

router.post('/', async(req,res) => 
    {
        const newStudent = new Student
       ({
            name: req.body.name,
            roll: req.body.roll,
            result: req.body.result
        })
    
        try
       {
            const n1 =  await newStudent.save() 
            res.json(n1)
        }
    catch(err)
       {
            res.send('Error')
        }
    })
    
// Export the router
module.exports = router;
