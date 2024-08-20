import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    description: 'This is a great product that you will love.',
    contact: 'Contact: ***'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Another amazing product that is very popular.',
    contact: 'Contact: ***'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    description: 'This product is a must-have for everyone.',
    contact: 'Contact: ***'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    description: 'Check out this fantastic product today!',
    contact: 'Contact: ***'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    description: 'A product that stands out from the rest.',
    contact: 'Contact: ***'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    description: 'This product is highly recommended by experts.',
    contact: 'Contact: ***'
  },
];

const AdvertisementList = () => {
  return (
    <table>
      <tbody>
        {[0, 1].map((row) => (
          <tr key={row}>
            {products.slice(row * 3, row * 3 + 3).map((product) => (
              <td key={product.id}>
                <div className="p-4 shadow-md rounded-lg text-center">
                  <img src={product.image} alt="Product" className="w-150 h-150 object-cover mx-auto" />
                  <p className="mt-2 text-gray-350">{product.description}</p>
                  <p className="mt-2 text-gray-350">{product.contact}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Details
                  </button>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvertisementList;
