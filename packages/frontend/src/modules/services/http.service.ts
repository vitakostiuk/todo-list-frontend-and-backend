// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ITodo } from '../common/types/todos.type';

export class HttpSerivce {
  baseUrl: string | undefined;

  fetchingService: any;

  apiVersion: string;

  constructor(baseUrl = 'http://localhost:4200', fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  get(config: { url: string }) {
    return this.fetchingService.get(this.getFullApiUrl(config.url));
  }

  add(config: { url: string; data: ITodo }) {
    return this.fetchingService.post(this.getFullApiUrl(config.url), config.data);
  }

  getOne(config: { url: string; id: string }) {
    return this.fetchingService.get(this.getFullApiUrl(`${config.url}/${config.id}`));
  }

  remove(config: { url: string; id: string }) {
    return this.fetchingService.delete(this.getFullApiUrl(`${config.url}/${config.id}`));
  }

  put(config: { url: string; data: ITodo; id: string }) {
    return this.fetchingService.put(this.getFullApiUrl(`${config.url}/${config.id}`), config.data);
  }
}
