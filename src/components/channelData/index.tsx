import * as S from './styles';
import Search from '../search';
import ChannelButton from '../channelButton';
import { users } from '../../mock';

const ChannelData: React.FC = () => {

  return (
    <S.Container>
      <Search />
      <S.ListWrapper>
        <S.DivText>
          <S.Text>
            Todos os amigos - 3
          </S.Text>
        </S.DivText>
        {users.map((user) =>
          <>
            <S.Separator />
            <ChannelButton username={user.name} isOnline={user.isOnline} isChannelData={true} />
          </>
        )}
      </S.ListWrapper>
    </S.Container>
  );
};

export default ChannelData;
