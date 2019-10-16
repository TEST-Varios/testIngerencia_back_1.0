import { Router } from "express";
import axios from "axios";
import { Test } from "../models/test.model"

const testRoutes = Router();

testRoutes.get("/",async (req,res)=>{
    let response:any;
    try{
        response = await promesa();
        let filtroResponse:Array<any> =<Array<any>> response.data.hits;
        const create:any= filtroResponse.map( e =>{
            let test = {
                created_at: e["created_at"],
                title: e["title"],
                url: e["url"],
                author: e["author"],
                points: e["points"],
                story_text: e["story_text"],
                comment_text: e["comment_text"],
                num_comments: e["num_comments"],
                story_id: e["story_id"],
                story_title: e["story_title"],
                parent_id: e["parent_id"],
                created_at_i: e["created_at_i"],
                _tags: e["_tags"],
                objectID: e["objectID"]
            } 
            return Test.create(test);
        });
        let final = await Promise.all(create);
        //console.log(final);
        res.status(200).json(response.data.hits)
    }catch(e){
        console.log("catch"+e);
        response = e;
        res.status(500).json({
            mensaje:"error"
        })
    }
    

});

async function promesa(){
    const url = "http://hn.algolia.com/api/v1/search_by_date?query=nodejs";
    const response = await axios.get(url);
    return response;
}
export default testRoutes;