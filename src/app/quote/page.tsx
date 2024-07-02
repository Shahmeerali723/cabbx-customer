"use client"
import { useState } from 'react';


import FilterComponent from '@/components/shared/FilterComponent';
import CarCard from '@/components/shared/CarCard';
import {   Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis, } from '@/components/ui/pagination';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
    const handlePageChange = (page:any)  =>  {
        setCurrentPage(page);
      };
    
      

  const carData = [
    { title: 'Boss', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    { title: 'Estate', price: '200' },
    // Add more car data here...
  ];

  const totalPages = Math.ceil(carData.length / itemsPerPage);
    
      const paginatedCars = carData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Grab the Best Rides for You</h1>
      <FilterComponent />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-4 w-full justify-center">
        {paginatedCars.map((car, index) => (
          <CarCard key={index} data={car} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
