import React from "react";
import * as S from "./styles";
import ServerButton from "../serverButton";
import { useServer } from "../../contexts/ServerContext";

const ServerList: React.FC = () => {
  const { servers, currentServer, setCurrentServer } = useServer();

  const handleServerClick = (serverId: string) => {
    const server = servers.find(s => s.id === serverId);
    if (server) {
      setCurrentServer(server);
    }
  };

  return (
    <S.Container>
      {servers.map((server, index) => (
        <React.Fragment key={server.id}>
          {index === 1 && <S.Separator />}
          <ServerButton
            server={server}
            isSelected={currentServer?.id === server.id}
            onClick={() => handleServerClick(server.id)}
          />
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default ServerList;
