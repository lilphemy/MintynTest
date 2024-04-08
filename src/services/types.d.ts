
export type wholeType = {
    id: string,
    email: string,
    roles: string[],
    apiKey: string,
    profile: {
        dob: string,
        name: string,
        about: string,
        address: string,
        company: string,
        location: {
            lat: number,
            long: number,
        },
        username?: string,
        createdAt?: string,
        updatedAt?: string,
    }
}


export type profileCat = {
    dob: string,
    address: string,
    company: string,
    name: string,
    location: {
        lat: number,
        long: number,
    }
} 