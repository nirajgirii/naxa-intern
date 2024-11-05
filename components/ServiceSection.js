"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { fetchServices } from "../redux/servicesSlice";

export default function ServiceSection() {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-12">{error}</div>;
  }

  const sortedServices = [...services].sort(
    (a, b) => a.service_order - b.service_order
  );

  const getImagePosition = (index) => {
    return index % 2 === 0 ? "left" : "right";
  };

  return (
    <div className="space-y-24 py-12 bg-gray-50">
      {sortedServices.map((service, index) => (
        <section
          key={service.id}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {getImagePosition(index) === "left" ? (
              <>
                <div className="order-1 md:order-none">
                  {service.icon && (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full "
                    />
                  )}
                </div>
                <div className="order-2 md:order-none">
                  <ServiceContent service={service} />
                </div>
              </>
            ) : (
              <>
                <div className="order-2 md:order-none">
                  <ServiceContent service={service} />
                </div>
                <div className="order-1 md:order-none">
                  {service.icon && (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function ServiceContent({ service }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        {service.photo && (
          <Image
            src={service.photo}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
        )}
        <h2 className="text-3xl text-gray-900">{service.title}</h2>
      </div>
      <div className="prose max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: service.description1 }}
          className="mb-6 text-gray-700 text-lg leading-relaxed"
        />
        <div
          dangerouslySetInnerHTML={{ __html: service.description2 }}
          className="bg-blue-50 p-6 rounded-lg text-gray-700 text-base leading-relaxed shadow-inner"
        />
      </div>
    </>
  );
}
