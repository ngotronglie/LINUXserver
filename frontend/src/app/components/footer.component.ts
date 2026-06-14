import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="font-bold mb-4">Về chúng tôi</h3>
            <p class="text-gray-400">Cung cấp các sản phẩm và dịch vụ chất lượng cao.</p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Liên kết nhanh</h3>
            <ul class="text-gray-400 space-y-2">
              <li><a href="#" class="hover:text-white">Trang chủ</a></li>
              <li><a href="#" class="hover:text-white">Sản phẩm</a></li>
              <li><a href="#" class="hover:text-white">Giới thiệu</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Liên hệ</h3>
            <p class="text-gray-400">Email: info@example.com</p>
            <p class="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <hr class="border-gray-700 mb-4" />
        <div class="text-center text-gray-400">
          <p>&copy; 2024 My Business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
