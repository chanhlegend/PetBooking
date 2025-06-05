import React from "react";
import NavbarCustomer from "../components/NavbarCustomer";
const ProfileUser = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <NavbarCustomer />
            <h1 className="text-3xl font-bold mb-4">Trang cá nhân</h1>
            <p className="text-lg">Chức năng này đang được phát triển.</p>
            <p className="text-sm text-gray-500 mt-2">Vui lòng quay lại sau.</p>
        </div>
    );
}

export default ProfileUser;