export interface CheckButtonType {
    label: string
    checked: boolean
}

export interface AvatarType {
    name: string
    url: string
}

export interface EventDataType {
    cardType: string
    mobile: boolean
    image?: string
    date: string
    title: string
    titleIcon?: string
    description: string
    teamMates?: string
    teamMatesAvatar?: string
    attending?: boolean
    avatars?: AvatarType[]
}