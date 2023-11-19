import axios from "axios";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";
import { background } from "@chakra-ui/react";

// axios.defaults.baseURL = "http://localhost:3000"; // important for connecting frontend with backend basically it is setting up proxy for api calls
// react state for storing chats
// api call to server for getting chats
// react useeffect that gets called automatically when website is rendered for firsttime.
const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div className="Chatpage" style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width={"100%"}
        height={"91.5vh"}
        padding={"10px"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
