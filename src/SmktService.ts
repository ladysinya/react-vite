import { User } from './Models/User';

class SmktService {
    latestUser?: User;

    async getUsers(searchStr?: string): Promise<User[]> {
        let url = 'https://dummyjson.com/users/search';
        if (searchStr) {
            url += `?q=${searchStr}`;
        }
        
        const data:Response = await fetch(url);
        const json = await data.json();
        return json.users as User[]
    }

    async getLatestUser(): Promise<User | undefined> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return this.latestUser;
    }

    async updateUser(user: User) {
        await fetch(`https://dummyjson.com/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user)
        });

        this.latestUser = user;
    }

    async createUser(user: User) {
        await fetch(`https://dummyjson.com/users/add`, {
            method: 'POST',
            body: JSON.stringify(user)
        });
        
        this.latestUser = user;
    }
}

const smktService = new SmktService();

export default smktService;