import { RoomStatus } from "../constants/status";
import { BaseResponse } from "./response";

export class room {
    id!: number;
    name!: string;
    type!: string;
    price!: number;
    roomArea!: number;
    roomStatus!: RoomStatus;
    description!: string;
    building!: building;
}

export class RoomRequest {
    name!: string;
    type!: string;
    price!: number;
    roomArea!: number;
    status!: RoomStatus;
    description!: string;
    buildingRequest!: BuildingRequest;
}

export class BuildingRequest {
    id!:number;
    name!: string;
    address!: string;
    description!: string;
}

export class building {
    id!: number;
    name!: string;
    address!: string;
    description!: string;
}

export class ListRoomResponse implements BaseResponse {
    message!: string;
    data!: room[];

}

export class ListBuildingResponse implements BaseResponse {
    message!: string;
    data!: building[];

}

export class RoomResponse implements BaseResponse {
    message!: string;
    data!: room;
}