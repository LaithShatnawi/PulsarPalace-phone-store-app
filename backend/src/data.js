const data = [
  {
    "brandName": "Samsung",
    "modelName": "Galaxy S21",
    "images": "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1647880087404-ed8b67e6f329?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "$529.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 151.7,
        "width": 71.2,
        "thickness": 7.9
      },
      "weight": 171
    },
    "displayDetails": {
      "type": "Dynamic AMOLED 2X",
      "size": 6.2,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10+", "120Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["12 MP", "12 MP", "64 MP"],
      "features": ["Dual Pixel PDAF", "OIS", "8K video"]
    },
    "platformDetails": {
      "os": "Android 11, One UI 3.1",
      "chipset": "Exynos 2100 (Global) - Snapdragon 888 (USA/China)",
      "cpu": "Octa-core",
      "gpu": "Mali-G78 MP14 (Global) - Adreno 660 (USA/China)"
    }
  },
  {
    "brandName": "Apple",
    "modelName": "iPhone 13 Pro",
    "images": "https://images.unsplash.com/photo-1695578130342-991b58f1ecb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1632582593957-e28f748ba619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1663761879666-312880c27fc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "$599.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 146.7, "width": 71.5, "thickness": 7.7 },
      "weight": 204
    },
    "displayDetails": {
      "type": "Super Retina XDR OLED",
      "size": 6.1,
      "resolution": "1170 x 2532 pixels",
      "features": ["HDR10", "Dolby Vision"]
    },
    "memoryDetails": {
      "ram": "6GB",
      "internalStorage": "128GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["12 MP", "12 MP", "12 MP"],
      "features": ["Night mode", "Deep Fusion", "4K Dolby Vision HDR recording"]
    },
    "platformDetails": {
      "os": "iOS 15",
      "chipset": "Apple A15 Bionic",
      "cpu": "Hexa-core",
      "gpu": "Apple GPU (4-core graphics)"
    }
  },
  {
    "brandName": "Samsung",
    "modelName": "Galaxy S21 Ultra",
    "images": "https://images.unsplash.com/photo-1675285776817-632fb95aff51?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1676115723792-69e7a3f6d504?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "$829.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 165.1, "width": 75.6, "thickness": 8.9 },
      "weight": 229
    },
    "displayDetails": {
      "type": "Dynamic AMOLED 2X",
      "size": 6.8,
      "resolution": "1440 x 3200 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "S Pen support"]
    },
    "memoryDetails": {
      "ram": "12GB",
      "internalStorage": "256GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "pentaCamera": true,
      "lenses": ["108 MP", "12 MP", "10 MP", "10 MP", "10 MP"],
      "features": ["100x zoom", "1080p@960fps", "8K video"]
    },
    "platformDetails": {
      "os": "Android 11, One UI 3.1",
      "chipset": "Exynos 2100 (Global) - Snapdragon 888 (USA/China)",
      "cpu": "Octa-core",
      "gpu": "Mali-G78 MP14 (Global) - Adreno 660 (USA/China)"
    }
  },
  {
    "brandName": "Google",
    "modelName": "Pixel 6 Pro",
    "images": "https://images.unsplash.com/photo-1635870723802-e88d76ae324e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1659941451212-3958a146611c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D||https://images.unsplash.com/photo-1635870664257-430f094c25db?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "$264.75",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 163.9, "width": 75.8, "thickness": 8.9 },
      "weight": 210
    },
    "displayDetails": {
      "type": "LTPO AMOLED",
      "size": 6.7,
      "resolution": "1440 x 3120 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "Always-on display"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB/256GB/512GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["50 MP", "12 MP", "48 MP"],
      "features": ["4x optical zoom", "Night Sight", "4K@30/60fps"]
    },
    "platformDetails": {
      "os": "Android 12",
      "chipset": "Google Tensor",
      "cpu": "Octa-core",
      "gpu": "Google GPU"
    }
  },
  {
    "brandName": "OnePlus",
    "modelName": "9 Pro",
    "images": "https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1||https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Pine%20green-gallery..png||https://i.pcmag.com/imagery/reviews/04bNeHvs7SGDFitpatp98xZ-5.fit_lim.size_768x.png",
    "price": "$689.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 163.2, "width": 73.6, "thickness": 8.7 },
      "weight": 197
    },
    "displayDetails": {
      "type": "Fluid AMOLED",
      "size": 6.7,
      "resolution": "1440 x 3216 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "Corning Gorilla Glass"]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["48 MP", "50 MP", "8 MP", "2 MP"],
      "features": ["Hasselblad optics", "8K@30fps", "Super Slow Motion"]
    },
    "platformDetails": {
      "os": "Android 11, OxygenOS 11",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Xiaomi",
    "modelName": "Mi 11",
    "images": "https://droidholic.com/wp-content/uploads/2020/12/Xiaomi-Mi-11-official-1-2048x960.jpg.webp||https://droidholic.com/wp-content/uploads/2020/12/Xiaomi-Mi-11-Official-4.jpg||https://droidholic.com/wp-content/uploads/2020/12/mi_11_display_image_1609164679595.jpg.webp",
    "price": "$641.61",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 164.3, "width": 74.6, "thickness": 8.1 },
      "weight": 196
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.81,
      "resolution": "1440 x 3200 pixels",
      "features": [
        "120Hz refresh rate",
        "HDR10+",
        "Corning Gorilla Glass Victus"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["108 MP", "13 MP", "5 MP"],
      "features": ["Night mode", "8K@30fps", "Dual-LED dual-tone flash"]
    },
    "platformDetails": {
      "os": "Android 11, MIUI 12",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Sony",
    "modelName": "Xperia 1 III",
    "images": "https://www.clove.co.uk/cdn/shop/products/d077fafe-e417-4eb6-8e80-1836c66bfd8e_2048x.jpg?v=1677064419||https://www.sony-asia.com/image/c1ef93b3cbf4eb092924de3c30a7141e?fmt=png-alpha&wid=720||https://www.sony-asia.com/image/523d143f7788e0a5a096448df02e633b?fmt=png-alpha&wid=720",
    "price": "$599.99",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 165, "width": 71, "thickness": 8.2 },
      "weight": 187
    },
    "displayDetails": {
      "type": "HDR OLED",
      "size": 6.5,
      "resolution": "1644 x 3840 pixels",
      "features": ["120Hz refresh rate", "HDR BT.2020"]
    },
    "memoryDetails": {
      "ram": "12GB",
      "internalStorage": "256GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["12 MP", "12 MP", "12 MP", "0.3 MP"],
      "features": ["Real-time Eye AF", "4K HDR 120fps slow-motion"]
    },
    "platformDetails": {
      "os": "Android 11",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "LG",
    "modelName": "Velvet",
    "images": "https://lh3.googleusercontent.com/K3sE3wmVjr7_OXVPjHG9oAZOKzvK3pp3qQqqBc4wYRdmcZe8cD9w0jrgLvL6UqqJ61lgDwHOXa49qfJo65Hj-Jo=w816-h459-rw||https://images.anandtech.com/doci/15905/X-T30_DSF2436.jpg||https://images.anandtech.com/doci/15905/X-T30_DSF2469.jpg",
    "price": "$251.29",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 167.2, "width": 74.1, "thickness": 7.9 },
      "weight": 180
    },
    "displayDetails": {
      "type": "OLED",
      "size": 6.8,
      "resolution": "1080 x 2460 pixels",
      "features": ["Waterdrop notch", "HDR10"]
    },
    "memoryDetails": {
      "ram": "6GB/8GB",
      "internalStorage": "128GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["48 MP", "8 MP", "5 MP"],
      "features": ["Steady Cam", "AI CAM"]
    },
    "platformDetails": {
      "os": "Android 10",
      "chipset": "Qualcomm Snapdragon 765G",
      "cpu": "Octa-core",
      "gpu": "Adreno 620"
    }
  },
  {
    "brandName": "Motorola",
    "modelName": "Edge 20 Pro",
    "images": "https://motorolauk.vtexassets.com/arquivos/ids/158529-1200-auto?width=1200&height=auto&aspect=true||https://motorolauk.vtexassets.com/arquivos/ids/158531-1200-auto?width=1200&height=auto&aspect=true||https://motorolauk.vtexassets.com/arquivos/ids/158532-1200-auto?width=1200&height=auto&aspect=true",
    "price": "$429.95",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 163.9, "width": 76, "thickness": 7.99 },
      "weight": 190
    },
    "displayDetails": {
      "type": "OLED",
      "size": 6.7,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10+", "90Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["108 MP", "16 MP", "8 MP"],
      "features": ["PDAF", "AI photography", "6K video recording"]
    },
    "platformDetails": {
      "os": "Android 11",
      "chipset": "Qualcomm Snapdragon 870",
      "cpu": "Octa-core",
      "gpu": "Adreno 650"
    }
  },
  {
    "brandName": "Nokia",
    "modelName": "X20",
    "images": "https://www.jbhifi.com.au/cdn/shop/products/521634-Product-0-I-637570201889790129_52de2481-77ac-4a94-85cd-0abb98b8a63b.jpg?v=1697491641||https://www.jbhifi.com.au/cdn/shop/products/521634-Product-4-I-637570201890258876_4d7d1250-563d-4459-8706-f4349a7c81a4.jpg?v=1697491641||https://www.jbhifi.com.au/cdn/shop/products/521634-Product-5-I-637570201890102669_9508720d-ac76-4f5a-b0bd-6bd4a771927e.jpg?v=1697491641",
    "price": "$399.00",
    "networkDetails": { "technology": "4G", "bands": ["GSM", "HSPA", "LTE"] },
    "bodyDetails": {
      "dimensions": { "height": 168.9, "width": 79.7, "thickness": 9.1 },
      "weight": 220
    },
    "displayDetails": {
      "type": "IPS LCD",
      "size": 6.67,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10", "450 nits"]
    },
    "memoryDetails": {
      "ram": "6GB/8GB",
      "internalStorage": "128GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["64 MP", "5 MP", "2 MP", "2 MP"],
      "features": ["Zeiss optics", "AI scene detection", "4K@30fps"]
    },
    "platformDetails": {
      "os": "Android 11",
      "chipset": "Qualcomm Snapdragon 480 5G",
      "cpu": "Octa-core",
      "gpu": "Adreno 619"
    }
  },
  {
    "brandName": "Huawei",
    "modelName": "Mate 40 Pro",
    "images": "https://media.extra.com/s/aurora/100216366_800/Huawei-Mate-40-Pro5G256GB-Black?locale=en-GB,en-*,*||https://media.extra.com/i/aurora/Mate-40-Pro_01||https://aurora.a.bigcontent.io/v1/static/Mate-40-Pro_03",
    "price": "$1,039.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 162.9, "width": 75.5, "thickness": 9.1 },
      "weight": 212
    },
    "displayDetails": {
      "type": "OLED",
      "size": 6.76,
      "resolution": "1344 x 2772 pixels",
      "features": ["90Hz refresh rate", "HDR10"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "256GB",
      "cardSlot": "NM (Nano Memory), up to 256GB (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "pentaCamera": true,
      "lenses": ["50 MP", "12 MP", "20 MP", "12 MP", "TOF 3D"],
      "features": ["Leica optics", "4K@30/60fps", "Dual-LED dual-tone flash"]
    },
    "platformDetails": {
      "os": "Android 10, EMUI 11",
      "chipset": "Kirin 9000",
      "cpu": "Octa-core",
      "gpu": "Mali-G78 MP24"
    }
  },
  {
    "brandName": "Asus",
    "modelName": "ROG Phone 5",
    "images": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikhDaTWNaQlA/v0/1200x1200.jpg||https://www.notebookcheck.net/fileadmin/_processed_/4/f/csm_Pictures_Asus_ROG_Phone_5_Ultimate_1146_b36231c504.jpg||https://fdn.gsmarena.com/imgroot/news/21/03/rog-phone-5-ultimate-hands-on/-1200w5/gsmarena_001.jpg",
    "price": "$1,065.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 172.8, "width": 77.3, "thickness": 10.3 },
      "weight": 238
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.78,
      "resolution": "1080 x 2448 pixels",
      "features": [
        "144Hz refresh rate",
        "HDR10+",
        "Corning Gorilla Glass Victus"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB/16GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["64 MP", "13 MP", "5 MP"],
      "features": ["Ultrawide", "Macro mode", "8K@30fps"]
    },
    "platformDetails": {
      "os": "Android 11, ROG UI",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Oppo",
    "modelName": "Find X3 Pro",
    "images": "https://www.notebookcheck.net/typo3temp/_processed_/a/b/csm_4_to_3_Teaser_Oppo_Find_X3_Pro_4111ebad24.jpg||https://images.fonearena.com/blog/wp-content/uploads/2021/03/OPPO-Find-X3-series-994x1024.jpg||https://cdn.pickr.com.au/wp-content/uploads/2021/04/37388DC6-9843-4C35-91E0-FFA081772550.jpeg",
    "price": "$729.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 163.6, "width": 74, "thickness": 8.3 },
      "weight": 193
    },
    "displayDetails": {
      "type": "LTPO AMOLED",
      "size": 6.7,
      "resolution": "1440 x 3216 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "1 Billion color support"]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["50 MP", "13 MP", "50 MP", "3 MP"],
      "features": ["2x telephoto", "Microscope lens", "4K@60fps"]
    },
    "platformDetails": {
      "os": "Android 11, ColorOS 11.2",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Vivo",
    "modelName": "X60 Pro+",
    "images": "https://images.indulgexpress.com/uploads/user/imagelibrary/2021/7/21/original/VivoX60Pro.jpg||https://images.hindustantimes.com/tech/img/2021/05/11/original/IMG_20210404_120440_Original_1620755463828.jpg||https://images.hindustantimes.com/tech/img/2021/05/11/original/IMG_20210404_115724_Original_1620755524629.jpg",
    "price": "$880.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 158.6, "width": 73.4, "thickness": 9.1 },
      "weight": 190
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.56,
      "resolution": "1080 x 2376 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "Curved edge display"]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["50 MP", "48 MP", "32 MP", "8 MP"],
      "features": ["Gimbal stabilization", "Super night mode", "4K@60fps"]
    },
    "platformDetails": {
      "os": "Android 11, Funtouch OS 11.1",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Realme",
    "modelName": "GT Master Edition",
    "images": "https://www.digitaltrends.com/wp-content/uploads/2021/08/realme-gt-master-edition-back-in-hand.jpg?fit=2000%2C1333&p=1||https://www.digitaltrends.com/wp-content/uploads/2021/08/realme-gt-master-and-explorer-editions.jpg?fit=2000%2C1333&p=1||https://www.digitaltrends.com/wp-content/uploads/2021/08/realme-gt-master-edition-gaming.jpg?fit=2000%2C1333&p=1",
    "price": "$350.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 158.5, "width": 73.3, "thickness": 8.4 },
      "weight": 174
    },
    "displayDetails": {
      "type": "Super AMOLED",
      "size": 6.43,
      "resolution": "1080 x 2400 pixels",
      "features": ["90Hz refresh rate", "HDR10"]
    },
    "memoryDetails": {
      "ram": "6GB/8GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["64 MP", "8 MP", "2 MP"],
      "features": ["AI Color Portrait", "Super Nightscape", "4K@60fps"]
    },
    "platformDetails": {
      "os": "Android 11, Realme UI 2.0",
      "chipset": "Qualcomm Snapdragon 870",
      "cpu": "Octa-core",
      "gpu": "Adreno 650"
    }
  },
  {
    "brandName": "Nubia",
    "modelName": "Red Magic 6 Pro",
    "images": "https://www.alezay.com/wp-content/uploads/2021/04/NUBIA-RED-MAGIC-6-PRO-5G-ALEZAY-KUWAIT-MOON-SILVER-e1618926192563.jpg||https://www.alezay.com/wp-content/uploads/2021/04/NUBIA-RED-MAGIC-6-PRO-5G-ALEZAY-KUWAIT-MOON-SILVER-BACK-TILTED-e1618925745801.jpg||https://www.alezay.com/wp-content/uploads/2021/04/NUBIA-RED-MAGIC-6-PRO-5G-ALEZAY-KUWAIT-MOON-SILVER-FRONT-e1618925691490.jpg",
    "price": "$680.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 169.9, "width": 77.2, "thickness": 9.7 },
      "weight": 220
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.8,
      "resolution": "1080 x 2400 pixels",
      "features": [
        "165Hz refresh rate",
        "HDR10+",
        "Capacitive shoulder triggers"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB/16GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["64 MP", "8 MP", "2 MP"],
      "features": ["AI photography", "4K@60fps", "Super Night mode"]
    },
    "platformDetails": {
      "os": "Android 11, Redmagic 4.0",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Lenovo",
    "modelName": "Legion Phone Duel 2",
    "images": "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Lenovo_Legion_Phone_Duel_2.jpg||https://news.lenovo.com/wp-content/uploads/2020/07/Header-Image_resized.png.webp||https://news.lenovo.com/wp-content/uploads/2021/04/Lenovo-Legion-Phone-Duel-2_Dual-Fast-Charging-e1617741140253.png",
    "price": "$570.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 176, "width": 78.5, "thickness": 9.9 },
      "weight": 259
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.92,
      "resolution": "1080 x 2460 pixels",
      "features": ["144Hz refresh rate", "HDR10+", "Legion Dual HaptiX"]
    },
    "memoryDetails": {
      "ram": "8GB/12GB/16GB",
      "internalStorage": "256GB/512GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "dualCamera": true,
      "lenses": ["64 MP", "16 MP"],
      "features": ["4K@60fps", "AI Super Night mode", "Motion Capture"]
    },
    "platformDetails": {
      "os": "Android 11, Legion OS",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "ZTE",
    "modelName": "Axon 30 Ultra",
    "images": "https://ztedevices.com/assets/media/heros/a30-hero/color01.png||https://ztedevices.com/assets/media/heros/a30-hero/filter.png||https://ztedevices.com/assets/media/heros/a30-hero/experience01.png",
    "price": "$749.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 161.5, "width": 73, "thickness": 8.4 },
      "weight": 188
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.67,
      "resolution": "1080 x 2400 pixels",
      "features": [
        "144Hz refresh rate",
        "HDR10+",
        "Under-display fingerprint sensor"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["64 MP", "64 MP", "64 MP", "8 MP"],
      "features": ["AI photography", "8K@30fps", "Super Night mode"]
    },
    "platformDetails": {
      "os": "Android 11, MiFavor 11",
      "chipset": "Qualcomm Snapdragon 870",
      "cpu": "Octa-core",
      "gpu": "Adreno 650"
    }
  },
  {
    "brandName": "Meizu",
    "modelName": "18 Pro",
    "images": "https://www.chooseyourmobile.com/wp-content/uploads/2021/05/Meizu-18-Pro-Gray-Color.jpg.webp||https://meizustore.net/wp-content/uploads/2021/03/Meizu-18-Pro-camera.jpg||https://www.chooseyourmobile.com/wp-content/uploads/2021/05/Meizu-18-Pro-Colors.jpg",
    "price": "$750.00 ",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 162.5, "width": 73, "thickness": 8.1 },
      "weight": 189
    },
    "displayDetails": {
      "type": "Super AMOLED",
      "size": 6.7,
      "resolution": "1440 x 3200 pixels",
      "features": [
        "120Hz refresh rate",
        "HDR10+",
        "Under-display fingerprint sensor"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["50 MP", "32 MP", "8 MP"],
      "features": ["3x optical zoom", "4K@60fps", "Super Night mode"]
    },
    "platformDetails": {
      "os": "Android 11, Flyme 9.1",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Honor",
    "modelName": "Magic 3 Pro+",
    "images": "https://bludiode.com/img/p/3/6/4/9/9/36499.jpg||https://cdn-files.kimovil.com/default/0006/38/thumb_537481_default_big.jpeg||https://cdn-files.kimovil.com/default/0006/38/thumb_537476_default_big.jpeg",
    "price": "$1,235.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 162.8, "width": 74.8, "thickness": 8.5 },
      "weight": 198
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.76,
      "resolution": "1344 x 2772 pixels",
      "features": [
        "120Hz refresh rate",
        "HDR10+",
        "Under-display fingerprint sensor"
      ]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "256GB/512GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["108 MP", "50 MP", "8 MP", "2 MP"],
      "features": ["Honor AIS Pro camera", "8K@30fps", "Super Night mode"]
    },
    "platformDetails": {
      "os": "Android 12, Magic UI 6",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Xiaomi",
    "modelName": "Black Shark 4 Pro",
    "images": "https://bludiode.com/img/p/3/0/3/7/2/30372.jpg||https://bludiode.com/img/p/3/0/3/7/3/30373.jpg||https://grab.mobile2go.com.my/images/thumbs/0018278_black-shark-4-pro-8gb-ram-128gb-rom-original-black-shark-malaysia.png",
    "price": "$579.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 163.8, "width": 76.4, "thickness": 9.9 },
      "weight": 220
    },
    "displayDetails": {
      "type": "AMOLED",
      "size": 6.67,
      "resolution": "1080 x 2400 pixels",
      "features": ["144Hz refresh rate", "HDR10+", "Pressure-sensitive zones"]
    },
    "memoryDetails": {
      "ram": "8GB/12GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["64 MP", "8 MP", "2 MP"],
      "features": ["64 MP", "8K@30fps", "Night mode"]
    },
    "platformDetails": {
      "os": "Android 11, Joy UI 12",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Apple",
    "modelName": "iPhone 13 mini",
    "images": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_colors_09142021_big.jpg.large.jpg||https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021_big.jpg.large.jpg||https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_display_09142021_big.jpg.large.jpg",
    "price": "$438.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 131.5, "width": 64.2, "thickness": 7.7 },
      "weight": 140
    },
    "displayDetails": {
      "type": "Super Retina XDR OLED",
      "size": 5.4,
      "resolution": "2340 x 1080 pixels",
      "features": [
        "ProMotion technology",
        "HDR10+",
        "Ceramic Shield front cover"
      ]
    },
    "memoryDetails": {
      "ram": "4GB",
      "internalStorage": "128GB/256GB/512GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "dualCamera": true,
      "lenses": ["12 MP", "12 MP"],
      "features": [
        "Night mode",
        "ProRAW and ProRes video recording",
        "LiDAR scanner"
      ]
    },
    "platformDetails": {
      "os": "iOS 15",
      "chipset": "Apple A15 Bionic",
      "cpu": "Hexa-core",
      "gpu": "Apple GPU (4-core graphics)"
    }
  },
  {
    "brandName": "Samsung",
    "modelName": "Galaxy S21 FE",
    "images": "https://en.shiftdelete.net/wp-content/uploads/2023/06/samsung-to-reintroduce-galaxy-s21-fe-5g-with-snapdragon-888.jpg||https://vcdn-sohoa.vnecdn.net/2021/04/12/Heres-your-first-look-at-the-S-7321-5999-1618179804.jpg||https://i.pinimg.com/564x/db/27/12/db271232f4e12989fb2f82ef991db4a0.jpg",
    "price": "$479.99",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 155.7, "width": 74.5, "thickness": 7.9 },
      "weight": 171
    },
    "displayDetails": {
      "type": "Super AMOLED",
      "size": 6.4,
      "resolution": "1080 x 2400 pixels",
      "features": [
        "120Hz refresh rate",
        "HDR10+",
        "Corning Gorilla Glass Victus"
      ]
    },
    "memoryDetails": {
      "ram": "6GB/8GB",
      "internalStorage": "128GB/256GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["12 MP", "8 MP", "12 MP"],
      "features": ["OIS", "Super Steady video", "Night mode"]
    },
    "platformDetails": {
      "os": "Android 11, One UI 3.1",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Samsung",
    "modelName": "Galaxy Z Fold 3",
    "images": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/06/galaxy-z-fold-5-mockup-1.jpg?w=1500&quality=82&strip=all&ssl=1||https://www.gizchina.com/wp-content/uploads/images/2023/01/imagem_2023-01-20_124703098.png||https://soyacincau.com/wp-content/uploads/2023/05/230501-Samsung-Galaxy-Z-Fold-5-render-4.jpg",
    "price": "$1,799.99",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": { "height": 158.2, "width": 128.1, "thickness": 6.4 },
      "weight": 271
    },
    "displayDetails": {
      "type": "Dynamic AMOLED 2X",
      "size": 7.6,
      "resolution": "1768 x 2208 pixels",
      "features": ["120Hz refresh rate", "HDR10+", "Under-display camera"]
    },
    "memoryDetails": {
      "ram": "12GB",
      "internalStorage": "256GB/512GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["12 MP", "12 MP", "12 MP"],
      "features": ["Under-display camera", "S Pen support", "Foldable display"]
    },
    "platformDetails": {
      "os": "Android 11, One UI 3.1.1",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "OnePlus",
    "modelName": "OnePlus 9",
    "images":"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Astralblack_2080a-min_euna.png||https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_2080a_euna.png||https://www.gizchina.com/wp-content/uploads/images/2021/03/OnePlus-9-series-colour-e.jpg",
    "price": "$729.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 160,
        "width": 74.2,
        "thickness": 8.7
      },
      "weight": 192
    },
    "displayDetails": {
      "type": "Fluid AMOLED",
      "size": 6.55,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10+", "120Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["48 MP", "50 MP", "2 MP"],
      "features": ["Leica optics", "Dual-LED dual-tone flash", "4K video"]
    },
    "platformDetails": {
      "os": "Android 11, OxygenOS 11.3.3",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Xiaomi",
    "modelName": "Xiaomi Mi 10",
    "images": "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/x/i/xiaomi_mi_10.jpg||https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/x/i/xiaomi_mi_10-8.jpg||https://cdn-files.kimovil.com/default/0004/24/thumb_323501_default_big.jpeg",
    "price": "$499.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 162.6,
        "width": 74.8,
        "thickness": 8.9
      },
      "weight": 208
    },
    "displayDetails": {
      "type": "Super AMOLED",
      "size": 6.67,
      "resolution": "1080 x 2340 pixels",
      "features": ["HDR10+", "90Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "256GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["108 MP", "13 MP", "2 MP"],
      "features": ["Dual-LED dual-tone flash", "8K video"]
    },
    "platformDetails": {
      "os": "Android 10, MIUI 12",
      "chipset": "Qualcomm Snapdragon 865",
      "cpu": "Octa-core",
      "gpu": "Adreno 650"
    }
  },
  {
    "brandName": "Oppo",
    "modelName": "Oppo Reno 5 Pro",
    "images": "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-26-at-2.33.11-PM.jpeg?ssl=1&quality=80&w=f||https://www.oppo.com/content/dam/oppo/product-asset-library/reno/reno5-pro-5g/specs3-pk/v1/assets/phone-1920-SA-822905.jpg.webp||https://ae01.alicdn.com/kf/H5fe28df1aef04f5e8fa060c93bc0dbbdW/Global-Version-Oppo-Reno-5-Pro-CPH2201-Smart-Phone-Face-ID-Fingerprint-12GB-RAM-256GB-ROM.jpg_.webp",
    "price": "$439.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 159.7,
        "width": 73.2,
        "thickness": 7.6
      },
      "weight": 173
    },
    "displayDetails": {
      "type": "Super AMOLED",
      "size": 6.55,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10+", "90Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB",
      "cardSlot": "No"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["64 MP", "8 MP", "2 MP", "2 MP"],
      "features": ["Dual-LED dual-tone flash", "4K video"]
    },
    "platformDetails": {
      "os": "Android 11, ColorOS 11.1",
      "chipset": "MediaTek Dimensity 1000+",
      "cpu": "Octa-core",
      "gpu": "Mali-G77 MC9"
    }
  },
  {
    "brandName": "Sony",
    "modelName": "Xperia 5 III",
    "images": "https://www.lbtechreviews.com/wp-content/uploads/2021/10/Sony_Xperia5III_bagside.jpg||https://www.gizmochina.com/wp-content/uploads/2021/04/Sony-Xperia-5-III-Green-Featured-01-1920x1280.jpg||https://images.expertreviews.co.uk/wp-content/uploads/2020/10/sony-xperia-5-ii-review-3.jpg?width=1200&height=675&fit=crop&format=webply",
    "price": "$999.99",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 157,
        "width": 68,
        "thickness": 8.2
      },
      "weight": 168
    },
    "displayDetails": {
      "type": "OLED",
      "size": 6.1,
      "resolution": "1080 x 2520 pixels",
      "features": ["HDR BT.2020", "120Hz refresh rate"]
    },
    "memoryDetails": {
      "ram": "8GB",
      "internalStorage": "128GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "tripleCamera": true,
      "lenses": ["12 MP", "12 MP", "12 MP"],
      "features": ["Zeiss optics", "4K HDR video"]
    },
    "platformDetails": {
      "os": "Android 11",
      "chipset": "Qualcomm Snapdragon 888",
      "cpu": "Octa-core",
      "gpu": "Adreno 660"
    }
  },
  {
    "brandName": "Motorola",
    "modelName": "Moto G Power (2021)",
    "images": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g9-power-2021-1.jpg||https://i.pcmag.com/imagery/reviews/05I2Y6ENcjPtcloPLq9PsI8-7.fit_scale.size_1028x578.v1612808696.jpg||https://i.pcmag.com/imagery/reviews/05I2Y6ENcjPtcloPLq9PsI8-1.fit_lim.size_768x.jpg",
    "price": "$189.99",
    "networkDetails": {
      "technology": "4G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 165.3,
        "width": 75.9,
        "thickness": 9.5
      },
      "weight": 206.5
    },
    "displayDetails": {
      "type": "IPS LCD",
      "size": 6.6,
      "resolution": "720 x 1600 pixels",
      "features": ["HDR10"]
    },
    "memoryDetails": {
      "ram": "4GB",
      "internalStorage": "64GB",
      "cardSlot": "microSDXC"
    },
    "mainCameraDetails": {
      "dualCamera": true,
      "lenses": ["48 MP", "2 MP"],
      "features": ["LED flash", "Full HD video"]
    },
    "platformDetails": {
      "os": "Android 10",
      "chipset": "Qualcomm Snapdragon 662",
      "cpu": "Octa-core",
      "gpu": "Adreno 610"
    }
  },
  {
    "brandName": "Nokia",
    "modelName": "8.3 5G",
    "images": "https://www.notebookcheck.net/fileadmin/_processed_/1/1/csm_4_zu_3_Nokia_8.3_ed1cd7cce0.jpg||https://www.notebookcheck.net/fileadmin/_processed_/1/c/csm_IMG_0893_50cb386882.jpg||https://www.notebookcheck.net/fileadmin/_processed_/e/1/csm_IMG_0896_2020495072.jpg",
    "price": "$325.00",
    "networkDetails": {
      "technology": "5G",
      "bands": ["GSM", "CDMA", "HSPA", "LTE"]
    },
    "bodyDetails": {
      "dimensions": {
        "height": 171.9,
        "width": 78.6,
        "thickness": 8.9
      },
      "weight": 220
    },
    "displayDetails": {
      "type": "IPS LCD",
      "size": 6.81,
      "resolution": "1080 x 2400 pixels",
      "features": ["HDR10"]
    },
    "memoryDetails": {
      "ram": "6GB",
      "internalStorage": "64GB",
      "cardSlot": "microSDXC (uses shared SIM slot)"
    },
    "mainCameraDetails": {
      "quadCamera": true,
      "lenses": ["64 MP", "12 MP", "2 MP", "2 MP"],
      "features": ["Zeiss optics", "LED flash", "4K video"]
    },
    "platformDetails": {
      "os": "Android 10",
      "chipset": "Qualcomm Snapdragon 765G",
      "cpu": "Octa-core",
      "gpu": "Adreno 620"
    }
  }
]

module.exports = {
  data
}