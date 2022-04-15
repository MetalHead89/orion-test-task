type BD = {
  users: { role: 'admin' | 'user', login: string, password: string }[]
}

const bd: BD = {
  users: [
    { role: 'admin', login: 'admin', password: 'пароль123' },
    { role: 'user', login: 'user', password: 'пароль456' },
  ],
};

export default bd;
export type { BD };