import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateString(9) + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleLiveMessage = (e) => {
    setLiveMessage(e.target.value);
  };

  return (
    <>
      <div className="ml-2 b-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((msg) => (
            <ChatMessage key={msg.name} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"SaiPradeep",
            message:liveMessage
          }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-3/4 px-2"
          type="text"
          value={liveMessage}
          onChange={handleLiveMessage}
        />
        <button className="px-5 py-1 ml-1 bg-green-500 font-bold text-white rounded-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
