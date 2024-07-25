
import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'A product from wishlist is on sale', description: 'You will receive an alert when one of your favorite products has a discount price.', enabled: true },
    { id: 2, title: 'A new product is released', description: 'You will receive an alert when one of your favorite products has a discount price.', enabled: false },
    { id: 3, title: 'New promotions are available', description: 'You will receive an alert when one of your favorite products has a discount price.', enabled: true },
  ]);

  const toggleNotification = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, enabled: !notification.enabled } : notification
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        
        <div className=' gap-10 flex'>
          <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>Dashboard</button>
          <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>Analytics</button>           <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>Invoice</button>
           <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>Schedule</button>
           <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>calender</button>
           <button className=' bg-blue-500 text-white hover:underline p-2 rounded-xl'>massage</button>
         </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">product </h2>
          {notifications.map(notification => (
            <div key={notification.id} className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-gray-500">{notification.description}</p>
              </div>
              <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox" 
                  checked={notification.enabled} 
                  onChange={() => toggleNotification(notification.id)} 
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" 
                />
                <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
                <style jsx>{`
                  .toggle-checkbox:checked {
                    right: 0;
                    border-color: #68D391;
                  }
                  .toggle-checkbox:checked + .toggle-label {
                    background-color: #68D391;
                  }
                  .toggle-checkbox:focus {
                    outline: none;
                  }
                `}</style>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
