import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_API } from '../commons/constants/api';
import { CreateMonthBillRequest, MonthBillListResponse, MonthBillResponse } from '../commons/dto/month-bill';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class MonthBillService {
    private baseURL = ROOT_API + "/month-bills";
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    createMonthBill(monthBillRequest: CreateMonthBillRequest): Observable<MonthBillResponse> {
        return this.httpClient.post<MonthBillResponse>(`${this.baseURL}/createMonthlyBill`, monthBillRequest);
    }

    getBillOfContract(contractId: number): Observable<MonthBillListResponse> {
        return this.httpClient.get<MonthBillListResponse>(`${this.baseURL}/contract/${contractId}`);
    }

    getBillById(monthBillId: number): Observable<MonthBillResponse> {
        return this.httpClient.get<MonthBillResponse>(`${this.baseURL}/${monthBillId}`);
    }
}
