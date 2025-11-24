import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Property Card Component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const hasDiscount = property.discount !== "";
  const discountedPrice = hasDiscount 
    ? property.price - (property.price * parseInt(property.discount) / 100)
    : property.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {hasDiscount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{property.category[0]}</span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm font-semibold">{property.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {property.address.state}, {property.address.city}, {property.address.country}
        </p>
        
        {/* Property Features */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.offers.bed}</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplet className="h-4 w-4" />
            <span>{property.offers.shower}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{property.offers.occupants}</span>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(1).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {hasDiscount ? (
              <div>
                <span className="text-sm text-gray-500 line-through mr-2">
                  ${property.price}
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(0)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">${property.price}</span>
            )}
            <span className="text-sm text-gray-600 ml-1">/night</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h1>
        <p className="text-gray-600 mb-8">Discover amazing places to stay around the world</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Layout;