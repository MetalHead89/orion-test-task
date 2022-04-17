type HeadOrganization = {
  id: number;
  fullOrganizationName: string;
  shortOrganizationName: string;
  tin: string;
  kpp: string;
  founder: string;
  address: string;
  telephone: string;
};

const headOrganizationBD: HeadOrganization[] = [
  {
    id: 1,
    fullOrganizationName: 'Рога и Копыта',
    shortOrganizationName: 'РиК',
    tin: '486489752348',
    kpp: '489751687',
    founder: 'Рогов Андрей Юсупович',
    address: 'г. Казань, ул. Ленина, д. 7',
    telephone: '89998887766 ',
  },
];

export default headOrganizationBD;
export type { HeadOrganization };
