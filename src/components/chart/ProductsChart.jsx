import { Card, CardContent } from "@mui/material";

const ProductDashboard = () => {
  const products = [
    {
      id: '01',
      name: 'Home Decor Range',
      popularity: 45,
      sales: '45%',
      color: 'bg-blue-400'
    },
    {
      id: '02',
      name: 'Disney Princess Pink Bag 18\'',
      popularity: 29,
      sales: '29%',
      color: 'bg-green-400'
    },
    {
      id: '03',
      name: 'Bathroom Essentials',
      popularity: 18,
      sales: '18%',
      color: 'bg-purple-400'
    },
    {
      id: '04',
      name: 'Apple Smartwatches',
      popularity: 25,
      sales: '25%',
      color: 'bg-orange-400'
    }
  ];

  return (
    <Card variant="outlined" className="max-w-3xl mx-auto p-6 bg-white rounded ">
        <CardContent>

        
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Top Products</h1>
      

      {/* Table View */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">#</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Popularity</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-3 px-4 text-sm text-gray-600">{product.id}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{product.name}</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${product.color} h-2.5 rounded-full`}
                      style={{ width: `${product.popularity}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`${product.color} px-3 py-1 rounded-full text-sm font-medium bg-opacity-20 text-${product.color.split('-')[1]}-700`}>
                    {product.sales}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </CardContent>
    </Card>
  );
};

export default ProductDashboard;
