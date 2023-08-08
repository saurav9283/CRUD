import { productModel } from "../model/Product.js";
export const addProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body)
        await newProduct.save();
        return res.status(200).send("Product Saved!!");
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}

export const updateProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const resp= await productModel.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(200).send("Product updated!")
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const resp= await productModel.findByIdAndDelete(id)
        res.status(200).send("Product Deleted!!")
    } catch (error) {
        console.log(error)
    }
}
export const getProducts= async (req,res)=>{
    try {
        const resp= await productModel.find()
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}