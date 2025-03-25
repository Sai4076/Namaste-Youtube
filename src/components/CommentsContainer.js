import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
    {
        name:"Sai pradeep",
        text:"It's good and nice content",
        replies:[],
    },
    {
        name:"Sai pradeep",
        text:"It's good and nice content",
        replies:[
            {
                name:"Sai pradeep",
                text:"It's good and nice content",
                replies:[],
            },
            {
                name:"Sai pradeep",
                text:"It's good and nice content",
                replies:[
                    {
                        name:"Sai pradeep",
                        text:"It's good and nice content",
                        replies:[],
                    }
                ],
            },
            {
                name:"Sai pradeep",
                text:"It's good and nice content",
                replies:[],
            },
        ]
    },
    {
        name:"Sai pradeep",
        text:"It's good and nice content",
        replies:[]
    },
    {
        name:"Sai pradeep",
        text:"It's good and nice content",
        replies:[]
    }
]

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData}/> 
    </div>
  );
};

export default CommentsContainer;
