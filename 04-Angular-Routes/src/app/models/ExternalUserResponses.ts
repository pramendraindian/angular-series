import { ExternalUser } from "./ExternalUser";

export interface ExternalUserListResponse
{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ExternalUser[];
}

export interface ExternalUserResponse
{
    data: ExternalUser;
}

export interface ExternalUserCommonResponse<T>
{
    data: T;
}