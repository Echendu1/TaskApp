import {User } from "./user"

export class Post {
    constructor (public title: string, public content: string, public user: User) {}
}