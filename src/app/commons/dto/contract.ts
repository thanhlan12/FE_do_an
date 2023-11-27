import { ClientDto } from "./client";
import { BaseResponse } from "./response";
import { room } from "./room";

export class ContractDto {
    id!: number;
    createdAt!: Date;
    note?: string;
    startDate!: Date;
    dueDate!: Date;
    roomDeposit!: number;
    clientDto!: ClientDto;
    room!: room;
}

export class ContractRequest {
    note?: string;
    startDate!: Date;
    dueDate!: Date;
    roomDeposit!: number;
    clientId!: number;
    roomId!: number;
}

export class ContractResponse implements BaseResponse {
    message!: string;
    data!: ContractDto;
}

export class ListContractResponse implements BaseResponse {
    message!: string;
    data!: ContractDto[];
}