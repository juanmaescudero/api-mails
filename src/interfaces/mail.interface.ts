export enum ETemplate {
    USER_REGISTER = 'USER_REGISTER',
    LOST_PASSWORD = 'LOST_PASSWORD'
}

export interface IMailProps {
    name: string
    email: string
    template: ETemplate
}
