const express = require('express')
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

var router = express.Router();

router.get('/',(req,res) =>{
    res.render("employee/addOrEdit",{
        viewTitle : "Insert Employee"
    });

});

router.post('/',(req,res) =>{
console.log(req.body)
insertRecords(req,res)
});

function insertRecords(req,res){
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) =>{
        if(!err){
            res.redirect('employee/list');
        }else{
            // if(err.name == ValidationError){
            //     handleValidationError(err, req.body);
            //     res.render("employee/addOrEdit",{
            //         viewTitle: "Insert Employee",
            //         employee: req.body
            //     })
            // }
            console(res)
        }
    })
}

router.get('/list',(req,res) => {
    // res.json("from list");
    Employee.find((err, docs) => {
        console.log(docs)
       
        if(!err){
            res.render("employee/list",{
                list: docs
            });
        }else{
            console.log(err)
        }
    })

  

});



function handleValidationError(err,body){
    for(field in err.errors){
        switch (err.errors[field].path){
            case 'fullName': 
                    body['fullNameError'] = err.errors[field].message;
            break;
            default:
                break;
        }
    }
    
}
module.exports = router;