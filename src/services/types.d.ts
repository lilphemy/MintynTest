
export type wholeType = {
    id: string,
    email: string,
    roles: string[],
    apikey: string,
    profile: profileCat
    userName: string,
    createdAt: string,
    updatedAt: string,
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