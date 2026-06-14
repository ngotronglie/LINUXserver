import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-4">Chào mừng bạn</h1>
          <p class="text-xl mb-8">Khám phá những sản phẩm và dịch vụ tuyệt vời của chúng tôi</p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Khám phá ngay
          </button>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Tại sao chọn chúng tôi?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="font-bold text-lg mb-2">Nhanh chóng</h3>
              <p class="text-gray-600">Dịch vụ nhanh và hiệu quả nhất trong ngành.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-4xl mb-4">💎</div>
              <h3 class="font-bold text-lg mb-2">Chất lượng</h3>
              <p class="text-gray-600">Cam kết cung cấp sản phẩm chất lượng cao nhất.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="font-bold text-lg mb-2">Hỗ trợ</h3>
              <p class="text-gray-600">Đội hỗ trợ khách hàng 24/7 sẵn sàng giúp bạn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
