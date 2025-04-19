import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, FormsModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  items: any[] = [];

  newName: string = '';
  newDataKey: string = '';
  newDataValue: string = '';
  dataObject: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.http.get<any[]>('https://api.restful-api.dev/objects')
      .subscribe({
        next: (data) => {
          this.items = data;
        },
        error: (err) => {
          console.error('Ошибка загрузки:', err);
        }
      });
  }
  

  public objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  addDataField(): void {
    if (this.newDataKey && this.newDataValue) {
      this.dataObject[this.newDataKey] = this.newDataValue;
      this.newDataKey = '';
      this.newDataValue = '';
    }
  }

addItem(): void {
  if (!this.newName.trim()) return;

  const newItem = {
    name: this.newName,
    data: this.dataObject
  };

  this.http.post('https://api.restful-api.dev/objects', newItem)
    .subscribe({
      next: (response) => {
        this.items.push(response);
        this.newName = '';
        this.dataObject = {};
      },
      error: (err) => console.error('Ошибка при добавлении:', err)
    });
}

deleteItem(id: string): void {
  this.http.delete(`https://api.restful-api.dev/objects/${id}`)
    .subscribe({
      next: () => {
        this.loadItems();
      },
      error: (err) => {
        console.error('Ошибка при удалении:', err);
      }
    });
}

}
