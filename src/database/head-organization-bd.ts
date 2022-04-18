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
  {
    id: 2,
    fullOrganizationName: 'Мангуст',
    shortOrganizationName: 'Мангуст',
    tin: '489215975618',
    kpp: '698425687',
    founder: 'Кирилов Кирил Васильевич',
    address: 'г. Москва, ул. Высотная, д. 15',
    telephone: '89541294865 ',
  },
  {
    id: 3,
    fullOrganizationName: 'Мир техники',
    shortOrganizationName: 'Техномир',
    tin: '594873218648',
    kpp: '354975468',
    founder: 'Петров Святослав Валерьевич',
    address: 'г. Архангельск, ул. 40 лет октября, д. 61',
    telephone: '83136849513 ',
  },
  {
    id: 4,
    fullOrganizationName: 'Конкурент и КО',
    shortOrganizationName: 'Конкурентик',
    tin: '156483459467',
    kpp: '486751432',
    founder: 'Ершов Евгений Витальевич',
    address: 'г. Сызрань, ул. Москвина, д. 11',
    telephone: '84321597549 ',
  },
];

export default headOrganizationBD;
export type { HeadOrganization };
