import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from './data.json';
import { FriendsList } from './Friends/Friends';
import friends from './friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
export const App = () => {
  const title = 'Upload stats';
  return (
    <div>
      <Profile />

      <Statistics title={title} stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
