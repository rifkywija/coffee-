
import type { NextPage } from 'next';

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { name: 'Coffee Latte', price: '€30', image: ''},
  { name: 'Normal Coffee', price: '€55', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWWsDClQZYTtTk3cvi_DdhzcmjKsnJ8jpZw&s' },
  { name: 'Cold Cream Coffee', price: '€50', image: 'data:image/jpeg;base64,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' },
  { name: 'Black Coffee', price: '€25', image: 'data:image/jpeg;base64,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' },
  { name: 'Hot Coffee', price: '€50', image: 'https://img.freepik.com/free-vector/white-cup-hot-coffee-with-cinnamon-saucer-beans-wooden-table-realistic_1284-56783.jpg' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="border p-4 text-center bg-white shadow-md rounded-md">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-md" />
    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-700 mb-4">{product.price}</p>
    <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Add to Cart</button>
  </div>
);

const Bloglist: NextPage = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-2xl font-bold text-center mb-8">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
);

export default Bloglist;
