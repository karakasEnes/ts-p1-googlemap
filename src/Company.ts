import faker from '@faker-js/faker';

export class Company {
  name: string;

  catchPhase: string;

  location: {
    lat: number;
    lng: number;
  };

  color = 'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `Company Name is: ${this.name}`;
  }
}
