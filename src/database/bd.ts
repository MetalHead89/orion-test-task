type BD = {
  users: {
    role: 'admin' | 'user';
    login: string;
    password: string;
    name: string;
    surname: string;
  }[];
};

const bd: BD = {
  users: [
    {
      role: 'admin',
      login: 'admin',
      password: '123',
      name: 'Администратор',
      surname: '#1',
    },
    {
      role: 'user',
      login: 'user',
      password: '456',
      name: 'Иван',
      surname: 'Иванович',
    },
  ],
};

export default bd;
export type { BD };
