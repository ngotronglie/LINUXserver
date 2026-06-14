import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-blue-600 text-white shadow-md">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="text-2xl font-bold">Logo</div>
          <span class="text-sm">My Business</span>
        </div>
        <ul class="flex gap-8 items-center">
          <li><a routerLink="/" class="hover:text-blue-200 transition">Trang chủ</a></li>
          <li><a routerLink="/about" class="hover:text-blue-200 transition">Giới thiệu</a></li>
          <li><a routerLink="/products" class="hover:text-blue-200 transition">Sản phẩm</a></li>
          <li><a routerLink="/contact" class="hover:text-blue-200 transition">Liên hệ</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {}
