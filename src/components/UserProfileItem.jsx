import React from 'react'

function UserProfileItem() {
    const options = [
        { icon: "fa-solid fa-user", title: "Edit Profile" },
        { icon: "fa-solid fa-credit-card", title: "Payment Options" },
        { icon: "fa-solid fa-bell", title: "Notifications" },
        { icon: "fa-solid fa-shield", title: "Security" },
        { icon: "fa-solid fa-language", title: "Language" },
        { icon: "fa-solid fa-eye", title: "Dark Mode" },
        { icon: "fa-solid fa-shield-halved", title: "Terms & Conditions" },
        { icon: "fa-brands fa-hire-a-helper", title: "Help Center" },
        { icon: "fa-solid fa-envelope", title: "Invite Friends" },
        { icon: "fa-solid fa-power-off", title: "Logout" },
    ]
    const language="English (US)"
    return (
        <>
            <div className='w-3/4 mx-auto bg-white rounded-3xl relative p-5 mt-10'>
                <div className='w-fit h-fit mx-auto absolute -top-5 left-1/2 -translate-x-1/2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&s" style={{ height: "100px" }} className='rounded-full border-3 border-green-800' alt="pp" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='rounded-xl border-3 border-green-800 absolute -bottom-2 right-0' style={{ height: '40px' }} alt="llogo" />
                </div>
                <div className='w-full mt-20'>
                    <h2 className='text-center font-bold'>James S.Hernandez</h2>
                    <p className='text-center'>jameshernandez@gmail.com</p>
                </div>
                <div className='w-full px-2 flex flex-col gap-5 mt-10 text-xl'>
                    {
                        options.map(item => (
                            <div className='flex justify-between'>
                                <span><i className={item.icon}></i> {item.title}</span>
                                <span>{item.title=="Language" && <>{language}</>}<i className="fa-solid fa-angle-right"></i></span>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default UserProfileItem