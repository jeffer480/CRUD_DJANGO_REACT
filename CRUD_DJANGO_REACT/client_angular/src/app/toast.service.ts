import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(summary: string, detail: string): void {
    this.messageService.add({ key: 'br', severity: 'success', summary, detail });
  }

  showError(summary: string, detail: string): void {
    this.messageService.add({ key: 'br', severity: 'error', summary, detail });
  }

  showInfo(summary: string, detail: string): void {
    this.messageService.add({ key: 'br', severity: 'info', summary, detail });
  }

  showWarn(summary: string, detail: string): void {
    this.messageService.add({ key: 'br', severity: 'warn', summary, detail });
  }

}
