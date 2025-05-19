export interface Product {
     id: number;
     name: string;
     description: string;
     image: string;
}

export interface Category {
     id: string;
     name: string;
     description: string;
     image: string;
     products: Product[];
}

export const categoryData: Category[] = [
     {
          id: "baby-clothes",
          name: "Baby Clothes",
          description:
               "Adorable and comfortable clothing options for your little ones.",
          image: "https://img.freepik.com/premium-photo/baby-clothes-fabric-background_392895-230017.jpg",
          products: [
               {
                    id: 1,
                    name: "Cotton Wears",
                    description:
                         "Soft, breathable cotton wears in various colors",
                    image: "https://img.drz.lazcdn.com/static/np/p/653c18fbbf43c1007242b65d4bbedbbb.jpg_720x720q80.jpg",
               },
               {
                    id: 2,
                    name: "Baby Shoes",
                    description: "Comfortable shoes for everyday wear",
                    image: "https://img.drz.lazcdn.com/g/kf/S267c54bb3f134d99a50717d547587622C.png_720x720q80.png",
               },
               {
                    id: 3,
                    name: "Infant Dresses",
                    description: "Adorable dresses for special occasions",
                    image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 4,
                    name: "Baby Hats & Caps",
                    description:
                         "Protect your baby from the sun with cute hats",
                    image: "https://tinyalpaca.co.uk/cdn/shop/products/122.jpg?v=1659254032",
               },
          ],
     },
     {
          id: "toys",
          name: "Toys",
          description:
               "Educational and fun toys to keep your baby engaged and learning.",
          image: "https://static.independent.co.uk/2024/10/01/13/Kids-xmas-toys-hero-indybest.jpg?width=1200&height=900&fit=crop",
          products: [
               {
                    id: 5,
                    name: "Soft Plush Dolls",
                    description: "Cuddly companions for your little one",
                    image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 6,
                    name: "Rattles & Teethers",
                    description: "Perfect for soothing teething babies",
                    image: "https://smartdoko.com/storage/products/resized/1687944221_3568.jpg",
               },
               {
                    id: 7,
                    name: "Educational Blocks",
                    description: "Colorful blocks for early development",
                    image: "https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFMR3A4Rmd6NlMuX0FDX1NMMTUwMF8uanBn.jpg",
               },
               {
                    id: 8,
                    name: "Funfull Toys",
                    description: "Cars, Bikes, Trains and more",
                    image: "https://images-na.ssl-images-amazon.com/images/I/51w-KA+MF-L._SL500_._AC_SL500_.jpg",
               },
          ],
     },
     {
          id: "diapers",
          name: "Diapers & Wipes",
          description:
               "Essential items for keeping your baby clean and comfortable.",
          image: "https://lasvegasbabyequipmentrentals.com/wp-content/uploads/2019/10/Diapers-Wipes-Bundle-Pack.jpg",
          products: [
               {
                    id: 9,
                    name: "Disposable Diapers",
                    description:
                         "Absorbent and comfortable diapers in various sizes",
                    image: "https://static-01.daraz.com.np/p/bb36e69bacb3abd60cb2006417df7a3b.jpg",
               },
               {
                    id: 10,
                    name: "Baby Wipes",
                    description: "Gentle wipes for sensitive skin",
                    image: "https://www.huggies.com.my/-/media/feature/huggies/apac/my/product/plp-and-pdp-images/pdp-wipes-cc-01.jpg?rev=26a50ee18c024a29b9fcc391f2162d6f",
               },
               {
                    id: 11,
                    name: "Diaper Rash Cream",
                    description: "Soothes and prevents diaper rash",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVEkQR7VZkbg3iY8jaV5RPZFld8CJTFe_3w&s",
               },
               {
                    id: 12,
                    name: "Cloth Diaper Sets",
                    description:
                         "Eco-friendly alternative to disposable diapers",
                    image: "https://static-01.daraz.com.np/p/1c731f65d60b25f608d47a93f1f37c7d.jpg",
               },
          ],
     },
     {
          id: "food",
          name: "Baby Food",
          description:
               "Nutritious food options for growing babies and toddlers.",
          image: "https://images.unsplash.com/photo-1569654513470-22d063acf061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          products: [
               {
                    id: 13,
                    name: "Cerelacs",
                    description: "Nutritious cereal for growing babies",
                    image: "https://www.epharmacy.com.np/content/images/thumbs/5ebf881affda6100011437c4_nestle-cerelac-stage-1-6-months-24-months.jpeg",
               },
               {
                    id: 14,
                    name: "Lactogen",
                    description: "Lactogen for infants",
                    image: "https://www.epharmacy.com.np/content/images/thumbs/5fa133af2126980001270bb6_lactogen-1-400gm.jpeg",
               },
               // {
               //      id: 15,
               //      name: "Fruit Purees",
               //      description:
               //           "Natural fruit purees for babies starting solids",
               //      image: "https://images.unsplash.com/photo-1631297858154-69f3f7239b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               // },
               // {
               //      id: 16,
               //      name: "Toddler Snacks",
               //      description: "Healthy snack options for toddlers",
               //      image: "https://images.unsplash.com/photo-1593095948071-474c414833c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               // },
          ],
     },
     {
          id: "accessories",
          name: "Baby Accessories",
          description: "Essential accessories for baby care and feeding.",
          image: "https://images.unsplash.com/photo-1622289610920-5ef3fd9efad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          products: [
               {
                    id: 17,
                    name: "Baby Bottles",
                    description: "Safe and BPA-free bottles for feeding",
                    image: "https://static-01.daraz.com.np/p/73d56b20bbbe58fffbe0d67edce4c50e.jpg",
               },
               {
                    id: 18,
                    name: "Pacifiers",
                    description: "Soothing pacifiers for babies",
                    image: "https://img.freepik.com/free-vector/bright-children-pacifiers-flat-pictures-set_74855-16042.jpg?semt=ais_hybrid&w=740",
               },
               {
                    id: 19,
                    name: "Baby Bibs",
                    description: "Cute and practical bibs for mealtimes",
                    image: "https://img.drz.lazcdn.com/static/np/p/f1c253d155c94ca19657730f15f23fe4.jpg_720x720q80.jpg",
               },
               {
                    id: 20,
                    name: "Baby Carriers",
                    description:
                         "Comfortable carriers for hands-free baby carrying",
                    image: "https://lumibabyshop.co.ke/wp-content/uploads/2023/08/baby-carrier-prices-in-nairobi-kenya.jpg",
               },
          ],
     },
];
