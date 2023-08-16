export class HttpConfigDressStore{
    basePort: number = 3000;
    baseUrl: string = `http://localhost:${this.basePort}`;
    baseImagesUrl: string = `http://localhost:${this.basePort}/images`;
}