type Branch = {
  id: number;
  headOrganization: number;
  address: string;
  executive: string;
  telephone: string;
};

const branchBD: Branch[] = [
  {
    id: 1,
    headOrganization: 1,
    address: 'г. Астрахань, ул. Новая, д. 116',
    telephone: '87778884444 ',
    executive: 'Белов Василий Михайлович',
  },
  {
    id: 2,
    headOrganization: 1,
    address: 'г. Чебоксары, ул. Шоссейная, д. 87',
    telephone: '89754975432 ',
    executive: 'Михеева Оксана федоровна',
  },
  {
    id: 3,
    headOrganization: 1,
    address: 'г. Новосибирск, ул. Николая Буды, д. 73',
    telephone: '87779246897',
    executive: 'Конев Максим Адреевич',
  },
  {
    id: 4,
    headOrganization: 2,
    address: 'г. Новосибирск, ул. Парижской коммуны, д. 95',
    telephone: '81354894568',
    executive: 'Грибоедов Владимир Анатольевич',
  },
  {
    id: 5,
    headOrganization: 2,
    address: 'г. Иркутск, ул. Красная, д. 8',
    telephone: '83154894833',
    executive: 'Орова Оксана Федоровна'
  },
  {
    id: 6,
    headOrganization: 3,
    address: 'г. Красноярск, ул. Коммунистическая, д. 1',
    telephone: '84681554865',
    executive: 'Масленников Евгений Константинович',
  },
  {
    id: 5,
    headOrganization: 4,
    address: 'г. Красноярск, ул. Первомайская, д. 47',
    telephone: '89432154899',
    executive: 'Сотников Андрей Семенович',
  },
];

export default branchBD;
export type { Branch };
