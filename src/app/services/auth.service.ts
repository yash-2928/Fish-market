import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly TOKEN_KEY = 'token';
    private readonly USER_KEY = 'user';

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }

    login(credentials: any): Observable<any> {
        return this.apiService.post('auth/login', credentials).pipe(
            tap((response: any) => {
                if (response && response.token) {
                    this.setSession(response);
                }
            })
        );
    }

    register(userData: any): Observable<any> {
        return this.apiService.post('auth/register', userData);
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        this.router.navigate(['/auth/login']);
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.TOKEN_KEY);
        // Add token expiration check if needed (e.g., using jwt-decode)
        return !!token;
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    getUser(): any {
        const user = localStorage.getItem(this.USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    private setSession(authResult: any): void {
        localStorage.setItem(this.TOKEN_KEY, authResult.token);
        if (authResult.user) {
            localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));
        }
    }
}
