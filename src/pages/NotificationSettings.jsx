import React, { useState } from "react";
import AppHeader from '../components/AppHeader'

function NotificationSettings() {
    const [settings, setSettings] = useState({
        specialOffers: true,
        sound: true,
        vibrate: false,
        generalNotification: true,
        promoDiscount: false,
        paymentOptions: true,
        appUpdate: true,
        newService: false,
        newTips: false,
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    return (
        <>
            <div className='w-full min-h-screen '>
                <AppHeader title={'NOTIFICATION SETTINGS'} />
                <div className="space-y-4 mt-4">
                    {[
                        { key: "specialOffers", label: "Special Offers" },
                        { key: "sound", label: "Sound" },
                        { key: "vibrate", label: "Vibrate" },
                        { key: "generalNotification", label: "General Notification" },
                        { key: "promoDiscount", label: "Promo & Discount" },
                        { key: "paymentOptions", label: "Payment Options" },
                        { key: "appUpdate", label: "App Update" },
                        { key: "newService", label: "New Service Available" },
                        { key: "newTips", label: "New Tips Available" },
                    ].map((item) => (
                        <div
                            key={item.key}
                            className="flex justify-between items-center px-4 pb-3 last:border-none md:px-10"
                        >
                            <span className="text-gray-700 text-sm sm:text-base">
                                {item.label}
                            </span>
                            <button
                                onClick={() => handleToggle(item.key)}
                                className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${settings[item.key] ? "bg-gray-900" : "bg-gray-200"
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${settings[item.key] ? "translate-x-5" : ""
                                        }`}
                                ></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default NotificationSettings