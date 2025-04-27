import RestaurantSection from "../components/restaurantSection";

function SpecialRestaurant() {
  return (
    <div className='flex bg-[#0F1A22] min-h-screen text-white'>
      <div className='flex-1 p-6 space-y-10 overflow-y-auto'>
        <h1 className='text-3xl font-bold mb-4'>Ресторан</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <RestaurantSection
            title='Онцлох рестораны жагсаалт'
            type='featured'
            status='approved'
          />
          <RestaurantSection
            title='Онцлох ресторанд хүлээгдэж буй рестораны жагсаалт'
            type='featured'
            status='pending'
          />
          <RestaurantSection
            title='Тусгай рестораны жагсаалт'
            type='special'
            status='approved'
          />
          <RestaurantSection
            title='Тусгай ресторанд хүлээгдэж буй рестораны жагсаалт'
            type='special'
            status='pending'
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialRestaurant;
