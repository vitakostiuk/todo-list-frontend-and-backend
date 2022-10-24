// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { IStatusPrivate, IStatusCompleted } from '../common/types/todos.type';

interface IInitialValue {
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
}

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

  add(config: { url: string; data: IInitialValue }) {
    return this.fetchingService.post(this.getFullApiUrl(config.url), config.data);
  }

  getOne(config: { url: string; id: string }) {
    return this.fetchingService.get(this.getFullApiUrl(`${config.url}/${config.id}`));
  }

  remove(config: { url: string; id: string }) {
    return this.fetchingService.delete(this.getFullApiUrl(`${config.url}/${config.id}`));
  }

  put(config: { url: string; data: IInitialValue; id: string }) {
    return this.fetchingService.put(this.getFullApiUrl(`${config.url}/${config.id}`), config.data);
  }

  updatePrivateField(config: { url: string; data: IStatusPrivate; id: string }) {
    return this.fetchingService.patch(
      this.getFullApiUrl(`${config.url}/${config.id}/status`),
      config.data
    );
  }

  updateCompletedField(config: { url: string; data: IStatusCompleted; id: string }) {
    return this.fetchingService.patch(
      this.getFullApiUrl(`${config.url}/${config.id}/status`),
      config.data
    );
  }
}
