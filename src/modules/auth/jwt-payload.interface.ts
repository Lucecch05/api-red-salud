
export interface IJwtPayload {
    id: number;
    username: string;
    rol: string;
    iat?: Date;
}