import { Schema, Document, model } from 'mongoose';

const testSchema = new Schema({
    create:{
        created_at: Date
    },
    title:{
        type: String
    },
    url:{
        type: String
    },
    author:{
        type: String
    },
    points:{
        type: String
    },
    story_text:{
        type: String
    },
    comment_text:{
        type: String
    },
    num_comments:[{
        type: String
    }],
    story_id:{
        type: Number
    },
    story_title:{
        type: String
    },
    story_url:{
        type: String
    },
    parent_id:{
        type: Number
    },
    created_at_i:{
        type: Number
    },
    _tags:[{
        type: String
    }],
    objectID:{
        type: String
    }
});

interface ITest extends Document{
    create: Date;
    title:String;
    url: String;
    author: String;
    points:String;
    story_text:String;
    comment_text: String[];
    num_comments: Object[];
    story_id: Number;
    story_title:Boolean;
    parent_id:Number;
    created_at_i:String;
    _tags:String[];
    objectID:String;
}


export const Test = model<ITest>('Test', testSchema);