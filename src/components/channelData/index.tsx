import React from 'react';
import { Container, ListWrapper, DivText, Text, Separator } from './styles';
import Search from '../search';
import ChannelButton from '../channelButton';
import { useUser } from '../../contexts/UserContext';
import { sortUsers } from '../../utils/helpers';

const ChannelData: React.FC = () => {
  const { users } = useUser();
  const sortedUsers = sortUsers(users);

  return (
    <Container>
      <Search />
      <ListWrapper>
        <DivText>
          <Text>
            Todos os amigos - {users.length}
          </Text>
        </DivText>
        {sortedUsers.map((user, index) => (
          <React.Fragment key={user.id}>
            {index > 0 && <Separator />}
            <ChannelButton
              username={user.name}
              isOnline={user.isOnline}
              isChannelData={true}
              user={user}
            />
          </React.Fragment>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default ChannelData;
