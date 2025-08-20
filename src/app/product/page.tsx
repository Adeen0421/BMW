import Image from 'next/image';
import React from 'react';

const MSeries = () => {
    const mcardata = [
        {id: 1, name: 'BMW M2', price: 'PKR 32,000,000', description: '0–100 km/h in 4.0 s', image: '/bmw-m2.webp'},
        {id: 2, name: 'BMW M3', price: 'PKR 21,390,600', description: '0 to 100 km/h in 3.5 seconds', image: '/bmw-m3.jpg'},
        {id: 3, name: 'BMW M4', price: 'PKR 22,224,000', description: '0 to 100 km/h in 3.9 seconds', image: '/bmw-m41.webp'},
        {id: 4, name: 'BMW M4 CS', price: 'PKR 34,447,200', description: '0 to 100 km/h in 3.4 seconds', image: '/bmw-m4cs.jpg'},
        {id: 5, name: 'BMW M5', price: 'PKR 34,169,400', description: '0 to 100km/h in 3.5 seconds', image: '/bmw-m5.webp'},
        {id: 6, name: 'BMW M5 CS', price: 'PKR 40,003,200', description: '0 to 100km/h in 3 seconds', image: '/bmw-mcs.jpg'},
    ];

    return (
        <div>
            <div className='mcars'>
                {mcardata.map((car) => (
                    <div key={car.id} className='car-card'>
                        <Image
                            width={400}
                            height={250}
                            src={car.image}
                            alt={car.name}
                            style={{objectFit: 'cover'}}
                        />
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                        <div className='price'>{car.price}</div>
                        <button>View more details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MSeries;
 