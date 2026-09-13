import { User } from '@/types';

const API_URL = 'http://localhost:3001/api';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

// Simular autenticação com localStorage (para desenvolvimento)
class AuthService {
  private storageKey = 'myday_auth';
  private tokenKey = 'myday_token';

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      // Em produção, isso seria uma chamada real à API
      const user: User = {
        id: Date.now().toString(),
        email: payload.email,
        name: payload.name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const token = this.generateToken();
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      localStorage.setItem(this.tokenKey, token);

      return { user, token };
    } catch (error) {
      throw new Error('Erro ao registrar usuário');
    }
  }

  async login(payload: LoginPayload): Promise<AuthResponse> {
    try {
      // Em produção, validar contra API
      const storedUser = localStorage.getItem(this.storageKey);

      if (!storedUser) {
        throw new Error('Usuário não encontrado');
      }

      const user = JSON.parse(storedUser) as User;

      if (user.email !== payload.email) {
        throw new Error('Email ou senha incorretos');
      }

      const token = this.generateToken();
      localStorage.setItem(this.tokenKey, token);

      return { user, token };
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }

  async logout(): Promise<void> {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.tokenKey);
  }

  getCurrentUser(): User | null {
    try {
      const user = localStorage.getItem(this.storageKey);
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser();
  }

  private generateToken(): string {
    return 'token_' + Math.random().toString(36).substr(2, 9);
  }
}

export const authService = new AuthService();