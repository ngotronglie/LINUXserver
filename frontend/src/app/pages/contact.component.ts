import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
        <p class="text-gray-600 mb-12">Chúng tôi rất vui khi nhận tin từ bạn. Hãy gửi cho chúng tôi tin nhắn của bạn.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Contact Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-bold text-lg mb-4">📍 Địa chỉ</h3>
            <p class="text-gray-700">
              123 Đường ABC, Quận 1<br />
              TP. Hồ Chí Minh, Việt Nam
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-bold text-lg mb-4">📞 Điện thoại</h3>
            <p class="text-gray-700">
              <a href="tel:+84123456789" class="hover:text-blue-600">(+84) 123-456-789</a><br />
              <a href="tel:+84987654321" class="hover:text-blue-600">(+84) 987-654-321</a>
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-bold text-lg mb-4">📧 Email</h3>
            <p class="text-gray-700">
              <a href="mailto:info@example.com" class="hover:text-blue-600">info@example.com</a><br />
              <a href="mailto:support@example.com" class="hover:text-blue-600">support@example.com</a>
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="mb-6">
              <label class="block font-bold mb-2">Họ và tên</label>
              <input
                type="text"
                [(ngModel)]="formData.name"
                name="name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div class="mb-6">
              <label class="block font-bold mb-2">Email</label>
              <input
                type="email"
                [(ngModel)]="formData.email"
                name="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div class="mb-6">
              <label class="block font-bold mb-2">Chủ đề</label>
              <input
                type="text"
                [(ngModel)]="formData.subject"
                name="subject"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Nhập chủ đề"
              />
            </div>

            <div class="mb-6">
              <label class="block font-bold mb-2">Tin nhắn</label>
              <textarea
                [(ngModel)]="formData.message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>

            <button
              type="submit"
              [disabled]="!contactForm.valid"
              class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              Gửi tin nhắn
            </button>

            <div *ngIf="submitMessage" class="mt-4 p-4 rounded-lg" [class]="submitMessage.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              {{ submitMessage.text }}
            </div>
          </form>
        </div>

        <!-- Map Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-6">Vị trí của chúng tôi</h2>
          <div class="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200 flex items-center justify-center">
            <p class="text-gray-600">Bản đồ sẽ được hiển thị tại đây</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitMessage: { success: boolean; text: string } | null = null;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitMessage = {
      success: true,
      text: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời trong 24 giờ.'
    };

    // Reset form
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.submitMessage = null;
    }, 3000);
  }
}
