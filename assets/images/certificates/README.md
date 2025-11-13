# 📸 Certificate Images - Simple Setup

## 📁 Put Your JPG Files Here:

Just copy your certificate JPG images to this folder:
`d:\portfolio\Portfolio\assets\images\certificates\`

## 📝 Name Your Files EXACTLY Like This:

1. **cert1.jpg** - Your first certificate
2. **cert2.jpg** - Your second certificate  
3. **cert3.jpg** - Your third certificate
4. **cert4.jpg** - Your fourth certificate

## ➕ To Add More Certificates:

1. **Add more images**: `cert5.jpg`, `cert6.jpg`, etc.
2. **Update the code**: Edit `assets/js/script.js` and add more items to the certificates array:

```javascript
let certificates = [
    { id: 1, image: "./assets/images/certificates/cert1.jpg" },
    { id: 2, image: "./assets/images/certificates/cert2.jpg" },
    { id: 3, image: "./assets/images/certificates/cert3.jpg" },
    { id: 4, image: "./assets/images/certificates/cert4.jpg" },
    { id: 5, image: "./assets/images/certificates/cert5.jpg" }, // Add new ones like this
];
```

## ✅ What You Get:

- **Only Images** - No text, just your certificate pictures
- **Navigation** - Previous/Next buttons to browse
- **Thumbnails** - Small previews at the bottom
- **Fullscreen** - Click on image to view full size
- **Counter** - Shows "1/4", "2/4", etc.
- **Keyboard Support** - Arrow keys to navigate

## 🚀 That's It!

Just put your JPG files in this folder with the correct names and they'll appear automatically!