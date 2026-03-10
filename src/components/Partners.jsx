import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Partners = () => {
  const mainPartners = [
    {
      name: 'Royaume du Maroc',
      subtitle: 'Ministère de l\'Agriculture',
      initials: 'RM',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'OIFMEREE',
      subtitle: 'Institut de Formation',
      initials: 'OI',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Fondation Hanns Seidel',
      subtitle: 'Foundation',
      initials: 'HS',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'ISPITSO',
      subtitle: 'Higher Institute',
      initials: 'IS',
      color: 'from-teal-500 to-teal-600',
    },
    {
      name: 'UN Environment',
      subtitle: 'United Nations',
      initials: 'UN',
      color: 'from-sky-500 to-sky-600',
    },
  ]

  const mainSponsors = [
    {
      name: 'EcoMON Chark',
      initials: 'EC',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Ecole Supérieure de Technologie',
      initials: 'EST',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: 'YES Green Maroc',
      initials: 'YG',
      color: 'from-green-500 to-lime-500',
    },
    {
      name: 'L\'Oriental',
      initials: 'LO',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const collaborators = [
    'Fondation Hanns Seidel',
    'UN Environment',
    'YES Green Maroc',
    'ISPITSO',
    'L\'Oriental',
    'IFMEREE',
    'Institut Français',
    'Agence du Bassin Hydraulique',
  ]

  const PartnerCard = ({ item, showSubtitle = true }) => (
    <div className="bg-white border-2 border-green-500 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[220px] group">
      <div className="h-24 md:h-28 w-full flex items-center justify-center mb-4">
        <div 
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-white font-bold text-xl">{item.initials}</span>
        </div>
      </div>
      <p className="text-center text-[#2c4360] font-semibold text-sm md:text-base group-hover:text-green-600 transition-colors">
        {item.name}
      </p>
      {showSubtitle && item.subtitle && (
        <p className="text-center text-gray-500 text-xs md:text-sm mt-1">
          {item.subtitle}
        </p>
      )}
    </div>
  )

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Partners */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#b14b3a] text-white px-8 py-3 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Main Partners</h3>
            </div>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="partners-swiper pb-12"
          >
            {mainPartners.map((partner, index) => (
              <SwiperSlide key={index}>
                <PartnerCard item={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#b14b3a] text-white px-8 py-3 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Main Sponsors</h3>
            </div>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="sponsors-swiper pb-12"
          >
            {mainSponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <PartnerCard item={sponsor} showSubtitle={false} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Collaborators - Infinite scrolling marquee */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold text-[#2c4360]">
              In Collaboration With
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full mt-4" />
          </div>
          
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-marquee">
              {[...collaborators, ...collaborators].map((name, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-3 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 px-6 py-3 rounded-full transition-all duration-300 border border-green-200 hover:border-green-400 hover:shadow-md cursor-pointer"
                >
                  <span className="text-[#2c4360] font-medium whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
