import { users } from "../../mock";
import ChannelButton from "../channelButton";
import * as S from "./styles";

const ChannelList: React.FC = () => {
  return (
    <S.Container>
      <S.Category>
        <S.UsersIcon />
        <span> Amigos</span>
      </S.Category>
      <S.Wrapper>
        <span>Mensagens Diretas</span>
        <S.AddIcon />
      </S.Wrapper>
      {users.map((user) =>
        <ChannelButton username={user.name} isOnline={user.isOnline} isChannelData={false} />
      )}
    </S.Container>
  );
};
export default ChannelList;