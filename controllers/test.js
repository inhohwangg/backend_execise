const {Post} = require('../models')
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const test = async(req,res)=> {
    const {content,comment} = req.body
    try {
        const a = await Post.create({content,comment})
        res.status(201).json({result:true,a})
    }catch(error) {
        console.log(error)
        res.status(400).json({result:false})
    }
}

const test1 = async(req,res)=> {
    const {content,comment} = req.body
    try {
        const a = await Post.create({content,comment})
        res.status(201).json({result:true,a})
    }catch(error) {
        console.log(error)
        res.status(400).json({result:false})
    }
}

module.exports = {test, test1}