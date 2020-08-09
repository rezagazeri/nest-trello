import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(page: number): Promise<import("./user.dto").UserRO[]>;
    showOneUser(username: string): Promise<import("./user.dto").UserRO>;
    editUser(id: string, data: UserDTO): Promise<import("./user.dto").UserRO>;
    showMe(username: string): Promise<import("./user.dto").UserRO>;
    login(data: UserDTO): Promise<import("./user.dto").UserRO>;
    register(data: UserDTO): Promise<import("./user.dto").UserRO>;
    forgot(email: string): Promise<void>;
    updatepassword(id: string, data: UserDTO): Promise<void>;
    reset(id: string, data: UserDTO): Promise<import("./user.dto").UserRO>;
}
