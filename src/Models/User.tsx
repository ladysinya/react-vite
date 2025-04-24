export class User {
    id: string = '';
    firstName: string = '';
    lastName: string = '';
    address: Address = new Address();
    phone: string = '';
    email: string = '';
    role: string = '';
}

export function getUserDisplayName(user: User) {
    return `${user.firstName} ${user.lastName}`;
}

export function getUserDisplayAddress(user: User) {
    return `${user.address.address}, ${user.address.city} ${user.address.stateCode}, ${user.address.postalCode}`;
}

export class Address {
    address: string = '';
    city: string = '';
    state: string = '';
    stateCode: string = '';
    postalCode: string = '';
    country: string = '';
    coordinates: Coordinates = new Coordinates();
}

export class Coordinates {
    lat: number = 0;
    lng: number = 0;
}