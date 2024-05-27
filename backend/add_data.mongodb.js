
use("Sports_App");

db.admins.insertOne({
    name: "Ayesha Kousar",
    phone: "03227878231",
    gender: "Female",
    email: "ayeshakousarbscs01@gmail.com",
    password: "ayeshalogging", // Remember to hash passwords
    image: "/Assets/admin.png" // Relative path to the image
  });

db.admins.find().pretty();
