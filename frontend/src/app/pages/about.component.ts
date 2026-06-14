import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Giới thiệu về chúng tôi</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img src="https://via.placeholder.com/400" alt="About" class="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Câu chuyện của chúng tôi</h2>
            <p class="text-gray-700 mb-4">
              Chúng tôi được thành lập vào năm 2020 với mục đích cung cấp những sản phẩm và dịch vụ tốt nhất cho khách hàng.
            </p>
            <p class="text-gray-700 mb-4">
              Với hơn 4 năm kinh nghiệm, chúng tôi đã phục vụ hàng nghìn khách hàng hài lòng trên toàn quốc.
            </p>
            <p class="text-gray-700">
              Đội ngũ của chúng tôi gồm những chuyên gia giàu kinh nghiệm, luôn sẵn sàng mang lại giá trị tốt nhất cho bạn.
            </p>
          </div>
        </div>

        <!-- Our Team -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-8 text-center">Đội ngũ của chúng tôi</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 class="font-bold text-lg">Nguyễn Văn A</h3>
              <p class="text-gray-600">Giám đốc Điều hành</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 class="font-bold text-lg">Trần Thị B</h3>
              <p class="text-gray-600">Trưởng phòng Bán hàng</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 class="font-bold text-lg">Lê Văn C</h3>
              <p class="text-gray-600">Trưởng phòng Kỹ thuật</p>
            </div>
          </div>
        </section>

        <!-- Mission & Vision -->
        <section class="bg-blue-50 p-8 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold mb-4">Sứ mệnh</h3>
              <p class="text-gray-700">
                Cung cấp các sản phẩm và dịch vụ chất lượng cao, giúp cải thiện cuộc sống của khách hàng.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Tầm nhìn</h3>
              <p class="text-gray-700">
                Trở thành công ty hàng đầu trong ngành, được tin tưởng và yêu quý bởi triệu khách hàng.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {}
