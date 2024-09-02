import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad1',
    description: 'This is a first advertisement.',
    contact: 'Contact: ***'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad2',
    description: 'This is a second advertisement.',
    contact: 'Contact: ***'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad3',
    description: 'This is a third advertisement.',
    contact: 'Contact: ***'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad4',
    description: 'This is a fourth advertisement.',
    contact: 'Contact: ***'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad5',
    description: 'This is a fifth advertisement.',
    contact: 'Contact: ***'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    nameid: 'Ad6',
    description: 'This is a sixth advertisement.',
    contact: 'Contact: ***'
  },
];

const AdvertisementList = () => {
  return (
    <div className='list'>
      <h2>AdvertisementList</h2>
    <table>
      <tbody>
        {[0, 1].map((row) => (
          <tr key={row}>
            {products.slice(row * 3, row * 3 + 3).map((product) => (
              <td key={product.id}>
                  <img src={product.image} alt="Product"/>
                  <p style={{ textAlign: "left" }}>{product.nameid}</p>
                  <p style={{ textAlign: "left" }}>{product.description}</p>
                  <p style={{ textAlign: "left" }}>{product.contact}</p>
                  <button>
                    Details
                  </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdvertisementList;
