import React from "react";
import ChannelInfo from "../../components/channelInfo";
import ChannelList from "../../components/channelList";
import ServerList from "../../components/serverList";
import FindMessages from "../../components/findMessages";

import { Grid } from "./styles";
import UserInfo from "../../components/userInfo";
import ChannelData from "../../components/channelData";
import ActiveList from "../../components/activeList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <FindMessages />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <ActiveList />
    </Grid>
  );
};
export default Layout;
