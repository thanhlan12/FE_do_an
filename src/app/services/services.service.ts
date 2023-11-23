import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_API } from '../commons/constants/api';
import { ServiceListResponse, ServiceRequest, ServiceResponse } from '../commons/dto/services';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    private baseURL = ROOT_API + "/services";
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    createService(serviceRequest: ServiceRequest): Observable<ServiceResponse> {
        return this.httpClient.post<ServiceResponse>(`${this.baseURL}`, serviceRequest);
    }

    getAllService(): Observable<ServiceListResponse> {
        return this.httpClient.get<ServiceListResponse>(`${this.baseURL}`);
    }

    getServiceById(serviceId: number): Observable<ServiceResponse> {
        return this.httpClient.get<ServiceResponse>(`${this.baseURL}/${serviceId}`);
    }

    updateService(serviceId: number, serviceRequest: ServiceRequest): Observable<ServiceResponse> {
        return this.httpClient.put<ServiceResponse>(`${this.baseURL}/${serviceId}`, serviceRequest);
    }

    deleteService(serviceId: number): Observable<number> {
        return this.httpClient.delete<number>(`${this.baseURL}/${serviceId}`);
    }
}