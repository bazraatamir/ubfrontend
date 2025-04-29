import RestaurantSection from "../components/restaurantSection";

function SpecialRestaurant() {
  return (
    <div className='flex bg-[#0F1A22] min-h-screen text-white'>
      <div className='flex-1 p-3 xs:p-4 sm:p-6 space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 overflow-y-auto'>
        <h1 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4'>Ресторан</h1>

        <div className='grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6 md:gap-8'>
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
