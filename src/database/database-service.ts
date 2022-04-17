import userBD from './users-bd';
import branchBD, { Branch } from './branch-bd';
import headOrganizationBD, { HeadOrganization } from './head-organization-bd';

type Role = 'admin' | 'user';
type databaseServices = {
  login: (login: string, password: string) => UserData;
  getHeadOrganizations: () => HeadOrganization[];
  getBranches: () => Branch[];
};

type UserData = {
  role: Role;
  login: string;
  name: string;
  surname: string;
} | null;

const databaseServices = {
  login: (login: string, password: string): UserData => {
    let userData: UserData = null;

    userBD.forEach((user) => {
      if (user.login === login && user.password === password) {
        userData = {
          role: user.role,
          login: user.login,
          name: user.name,
          surname: user.surname,
        };
      }
    });

    return userData;
  },

  getHeadOrganizations: (): HeadOrganization[] => {
    return headOrganizationBD;
  },

  getBranches: (): Branch[] => {
    return branchBD;
  },
};

export default databaseServices;
export type { UserData, databaseServices };
