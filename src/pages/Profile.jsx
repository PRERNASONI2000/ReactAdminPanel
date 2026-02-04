import React from "react";

const Profile = () => {
  return (
    // 'bg-base-100' और 'text-base-content' क्लासेस थीम के अनुसार रंग बदलेंगी
    <div className="flex items-center justify-center h-screen bg-base-100 text-base-content">
      {/* 'text-primary' क्लास आपके theme के primary color का उपयोग करेगी */}
      <h1 className="text-4xl font-bold text-primary">Profile Page</h1>
    </div>
  );
};

export default Profile;