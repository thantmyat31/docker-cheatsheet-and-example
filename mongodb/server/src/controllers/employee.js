const Employee = require("../models/employee");

const createEmployee = (req, res) => {
    let employee = req.body;
    
    Employee.find({ name: employee.name, email: employee.email })
        .exec((error, result) => {
            if(error) {
                return res.status(400).json({
                    message: 'Something went wrong while finding the data in the database.',
                    error
                });
            }
            if(result.length) {
                return res.status(500).json({
                    message: 'The employee is already exists.',
                    result
                })
            }

            const newEmployee = new Employee(employee);
            newEmployee.save((error, result) => {
                if(error) {
                    return res.status(400).json({
                        message: 'Something went wrong while inserting the data to the database.',
                        error
                    })
                }
                Employee.findById(result._id)
                    .exec((error, result) => {
                        if(error) {
                            return res.status(400).json({
                                message: 'Something went wrong while retrieving the created data.',
                                error
                            })
                        }

                        return res.status(201).json({
                            success: true,
                            message: 'The data is created successfully.',
                            result
                        })
                    })
            })
        })
}

const updateEmployee = (req, res) => {
    const employee = req.body;

    Employee.findOneAndUpdate({ _id: employee._id }, {...employee}, {new: true})
        .exec((error, result) => {
            if(error) {
                return res.status(400).json({
                    message: 'Something went wrong while updating the data.',
                    error
                });
            }
    
            return res.status(200).json({
                success: true,
                message: 'The data is updated successfully.',
                result
            })
        })
}

const deleteEmployee = (req, res) => {
    const employee = req.body;

    Employee.findOneAndDelete({ _id: employee._id }, (error, result) => {
        if(error) {
            return res.status(400).json({
                message: 'Something went wrong while updating the data.',
                error
            });
        }
        return res.status(200).json({
            success: true,
            message: 'The data is updated successfully.',
            result
        })
    })
}

const getAllEmployees = (req, res) => {
    Employee.find({}, (error, result) => {
        if(error) {
            return res.status(400).json({
                message: 'Error occouring when reading all the data from the database.',
                error
            })
        }
        return res.status(200).json({
            success: true,
            message: 'The data are reading successfully.',
            result
        })
    })
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees
}