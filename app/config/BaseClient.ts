import Cookies from 'js-cookie';
import appConfig from './app.config';

export class BaseClient {
    private readonly baseUrl: string;
    private readonly path: string;
    private readonly fetchOptions: any;
    private readonly fileType: string | null;

    /**
     * Constructeur de la classe BaseRequest
     * @param path Chemin de l'API (relatif à la base URL)
     * @param fetchOptions Options de la requête fetch
     * @param fileType Type de fichier pour l'en-tête Content-Type (par exemple 'application/json' ou 'multipart/form-data')
     */
    constructor(path: string, fetchOptions: any, fileType: string | null = null) {
        this.baseUrl = this.getBaseUrl();
        this.path = path;
        this.fetchOptions = {...fetchOptions, credentials: 'include'};
        this.fileType = fileType;
    }

    /**
     * Retourne une instance de Request configurée
     */
    get request(): Request {
        this.fetchOptions.headers = this.getBaseHeaders();
        return new Request(`${this.baseUrl}${this.path}`, this.fetchOptions);
    }

    /**
     * Obtient la base URL de l'application en fonction de l'environnement
     */
    private getBaseUrl(): string {
        return process.env.NEXT_PUBLIC_API_URL || '';
    }

    /**
     * Retourne les en-têtes par défaut pour la requête
     */
    private getBaseHeaders(): Headers {
        const headers = new Headers();

        // Configuration du Content-Type et Accept en fonction du type de fichier
        if (!this.fileType) {
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
        } else if (this.fileType !== 'multipart/form-data') {
            headers.append('Content-Type', this.fileType);
            headers.append('Accept', this.fileType);
        }

        // Ajout du token CSRF si disponible
        const csrfCookie = Cookies.get('XSRF-TOKEN');
        if (csrfCookie) {
            headers.append('X-XSRF-TOKEN', decodeURIComponent(csrfCookie));
        }

        // Ajout de l'autorisation si un token est présent
        const authToken = Cookies.get(appConfig.TOKEN_KEY);
        if (authToken) {
            headers.append('Authorization', `Bearer ${decodeURIComponent(authToken)}`);
        }

        return <Headers>headers;
    }
}
