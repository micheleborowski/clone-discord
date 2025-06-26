import React from "react";
import { Button, MentionsBadge } from "./styles";
import { Server } from "../../types";
import discord from "../../assets/discord.png";

export interface ServerButtonProps {
  server: Server;
  isSelected?: boolean;
  onClick?: () => void;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  server,
  isSelected = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Button
      server={server}
      isSelected={isSelected}
      onClick={handleClick}
      title={server.name}
    >
      {server.isHome ? (
        <img src={discord} alt="Home" />
      ) : (
        <span className="server-initial">
          {server.name.charAt(0).toUpperCase()}
        </span>
      )}

      {server.mentions && server.mentions > 0 && (
        <MentionsBadge>
          {server.mentions > 99 ? '99+' : server.mentions}
        </MentionsBadge>
      )}
    </Button>
  );
};

export default ServerButton;
