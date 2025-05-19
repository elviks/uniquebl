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
                    name: "Cotton Onesies (Set of 3)",
                    description:
                         "Soft, breathable cotton onesies in various colors",
                    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 2,
                    name: "Baby Rompers",
                    description: "Comfortable rompers for everyday wear",
                    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
                    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
                    name: "Soft Plush Animals",
                    description: "Cuddly companions for your little one",
                    image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 6,
                    name: "Rattles & Teethers",
                    description: "Perfect for soothing teething babies",
                    image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 7,
                    name: "Educational Blocks",
                    description: "Colorful blocks for early development",
                    image: "https://images.unsplash.com/photo-1560859251-d c2c08084d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 8,
                    name: "Musical Toys",
                    description:
                         "Toys that play sounds and music for sensory development",
                    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
                    image: "https://images.unsplash.com/photo-1596488607410-0a3006598b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 10,
                    name: "Baby Wipes",
                    description: "Gentle wipes for sensitive skin",
                    image: "https://images.unsplash.com/photo-1598346763242-7fbe5426181d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 11,
                    name: "Diaper Rash Cream",
                    description: "Soothes and prevents diaper rash",
                    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 12,
                    name: "Cloth Diaper Sets",
                    description:
                         "Eco-friendly alternative to disposable diapers",
                    image: "https://images.unsplash.com/photo-1596045844811-af11dd885fab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
                    name: "Cerelac Varieties",
                    description: "Nutritious cereal for growing babies",
                    image: "https://images.unsplash.com/photo-1569654513470-22d063acf061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 14,
                    name: "Baby Formula",
                    description: "High-quality formula for infants",
                    image: "https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 15,
                    name: "Fruit Purees",
                    description:
                         "Natural fruit purees for babies starting solids",
                    image: "https://images.unsplash.com/photo-1631297858154-69f3f7239b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 16,
                    name: "Toddler Snacks",
                    description: "Healthy snack options for toddlers",
                    image: "https://images.unsplash.com/photo-1593095948071-474c414833c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
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
                    image: "https://images.unsplash.com/photo-1622289610920-5ef3fd9efad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 18,
                    name: "Pacifiers",
                    description: "Soothing pacifiers for babies",
                    image: "https://images.unsplash.com/photo-1590002893558-64b9a9753f05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 19,
                    name: "Baby Bibs",
                    description: "Cute and practical bibs for mealtimes",
                    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
               {
                    id: 20,
                    name: "Baby Carriers",
                    description:
                         "Comfortable carriers for hands-free baby carrying",
                    image: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
               },
          ],
     },
];
