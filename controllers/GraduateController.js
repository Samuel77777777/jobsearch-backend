import Graduate from "../models/GraduateModel.js";

export const getGraduates = async(req,res) => {
    try{
        const response = await Graduate.findAll();
        // console.log(response)
        res.status(200).json(response);
      } catch (error) {
        console.log(error.message);
      }
}

export const someRecords = async(req,res) => {
    try{
        const response = await Graduate.findAll(
            {attributes: ['fullName','image','specialization','description','employmentStatus']}
        );
        // console.log(response)
        res.status(200).json(response);
      } catch (error) {
        console.log(error.message);
      }
}

export const getGraduateById = async(req, res) => {
    try {
        const response = await Graduate.findOne({
            where: {
                id: req.params.id,
                
            }
        });
        
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createGraduate = async(req, res) => {
    try{
        await Graduate.create(req.body);
        res.status(201).json({msg: "Graduate Created"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateGraduate = async(req,res) => {
    try{
        await Graduate.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Graduate Record Updated"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteGraduate = async(req, res) =>{
    try{
        await Graduate.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Graduate Record Deleted"});
    } catch (error) {
        console.log(error.message);
        
    }
}