// API client for future integrations

interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

interface ApiError {
  message: string;
  status: number;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
      }

      const data = await response.json();
      return { data, success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return { data: null as T, success: false, error: message };
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Contact form submission (placeholder for future backend integration)
export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  // This would integrate with a backend service or serverless function
  // For now, just simulate the API call
  return new Promise<ApiResponse<{ id: string }>>((resolve) => {
    setTimeout(() => {
      resolve({
        data: { id: Math.random().toString(36) },
        success: true
      });
    }, 1000);
  });
}

export { ApiError };
export type { ApiResponse };
