const routes=require("express").Router();

const {category}=require("../CategoryCompo/Category");

routes.get("/blog",category);

module.exports={
    routes
}