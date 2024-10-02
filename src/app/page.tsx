import { Button } from '@/components/ui/button';
import { getUsers } from '@/data-acces/user';

const HomePage = async () => {
  const users = await getUsers();
  return (
    <main className='container mx-auto'>
      <Button>Hello</Button>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <p></p>
            </li>
          ))}
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <p>
                {user.name} - {user.email}
              </p>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default HomePage;
