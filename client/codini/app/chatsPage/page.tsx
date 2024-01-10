import { FC } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface User {
  username: string;
  secret: string;
}

interface ChatsPageProps {
  user: User;
}

const ChatsPage: FC<ChatsPageProps> = ({ user }) => {
  console.log(user);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={
          process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID ||
          `ef2eab1d-2c81-4699-bb60-9bfac5601021`
        }
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
