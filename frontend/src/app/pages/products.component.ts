import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Sản phẩm của chúng tôi</h1>
        <p class="text-gray-600 mb-12">Khám phá bộ sưu tập sản phẩm chất lượng cao của chúng tôi</p>

        <!-- Filter -->
        <div class="mb-8 flex gap-4 flex-wrap">
          <button 
            *ngFor="let category of categories"
            (click)="selectedCategory = category"
            [class.bg-blue-600]="selectedCategory === category"
            [class.bg-gray-200]="selectedCategory !== category"
            [class.text-white]="selectedCategory === category"
            class="px-4 py-2 rounded-lg transition"
          >
            {{ category }}
          </button>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let product of filteredProducts" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img 
              [src]="product.image" 
              [alt]="product.name" 
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-blue-600">{{ product.price | currency }}</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent {
  selectedCategory = 'Tất cả';
  categories = ['Tất cả', 'Điện tử', 'Thời trang', 'Sách', 'Thực phẩm'];

  products = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      category: 'Điện tử',
      description: 'Mô tả sản phẩm 1',
      price: 299000,
      image: 'https://via.placeholder.com/300x200?text=Product+1'
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      category: 'Thời trang',
      description: 'Mô tả sản phẩm 2',
      price: 199000,
      image: 'https://via.placeholder.com/300x200?text=Product+2'
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      category: 'Sách',
      description: 'Mô tả sản phẩm 3',
      price: 99000,
      image: 'https://via.placeholder.com/300x200?text=Product+3'
    },
    {
      id: 4,
      name: 'Sản phẩm 4',
      category: 'Thực phẩm',
      description: 'Mô tả sản phẩm 4',
      price: 149000,
      image: 'https://via.placeholder.com/300x200?text=Product+4'
    },
    {
      id: 5,
      name: 'Sản phẩm 5',
      category: 'Điện tử',
      description: 'Mô tả sản phẩm 5',
      price: 399000,
      image: 'https://via.placeholder.com/300x200?text=Product+5'
    },
    {
      id: 6,
      name: 'Sản phẩm 6',
      category: 'Thời trang',
      description: 'Mô tả sản phẩm 6',
      price: 249000,
      image: 'https://via.placeholder.com/300x200?text=Product+6'
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'Tất cả') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
