type BranchBD = {
  id: number;
  address: string;
  executive: string;
  telephone: string;
}[];

const branchBD: BranchBD = [
  {
    id: 1,
    address: 'г. Астрахань, ул. Новая, д. 116',
    telephone: '87778884444 ',
    executive: 'Белов Василий Михайлович',
  },
  {
    id: 2,
    address: 'г. Чебоксары, ул. Шоссейная, д. 87',
    telephone: '89754975432 ',
    executive: 'Михеева Оксана федоровна',
  },
  {
    id: 3,
    address: 'г. Новосибирск, ул. Николая Буды, д. 73',
    telephone: '87779246897',
    executive: 'Конев Максим Адреевич',
  },
];

export default branchBD;
export type { BranchBD };
