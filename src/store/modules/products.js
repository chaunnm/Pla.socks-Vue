const products = {
  state: {
    productData: [
      {
        productId: 1,
        itemTitle: "Happy High",
        variance: 1,
        image:
          "https://cdn.shopify.com/s/files/1/1781/5821/products/Hands_across_calves_1.jpg?v=1633433719&width=1445",
        stock: "0",
        sold: "0",
        price: 100000,
        height: 100,
        category: "Boxes Of Love",
        thickness: "Medium",
        sale: 51,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 2,
        itemTitle: "Happy High",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/1781/5821/products/Sasquatch_Valentine_1.jpg?v=1633433719&width=1445",
        stock: "2",
        sold: "0",
        price: 100000,
        height: 80,
        category: "Boxes Of Love",
        thickness: "High",
        sale: 51,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 3,
        itemTitle: "Happy High",
        variance: 3,
        image:
          "https://cdn.shopify.com/s/files/1/1781/5821/products/Fox_Love_1.jpg?v=1633433719&width=1445",
        stock: "5",
        sold: "0",
        price: 100000,
        height: 90,
        category: "Boxes Of Love",
        thickness: "High",
        sale: 51,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 4,
        itemTitle: "Happy High",
        variance: 4,
        image:
          "https://i0.wp.com/yaya21.co.uk/wp-content/uploads/2019/10/Happy-Socks-I-Love-You-Gift-Box_XLOV08-4300_5.jpg?resize=800%2C800&ssl=1",
        stock: "10",
        sold: "0",
        price: 100000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Medium",
        sale: 51,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 5,
        itemTitle: "Race Performance Socks",
        variance: 1,
        image:
          "https://www.dynafit.com/media/image/7c/1e/de/03385e4a-b625-48d7-b6af-9d9739f5a05c_dynafit_600x600.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 12,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 6,
        itemTitle: "Race Performance Socks",
        variance: 2,
        image:
          "https://www.bfgcdn.com/1500_1500_90/201-3285-0211/dynafit-speed-dryarn-socks-skisocken.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Sock",
        thickness: "Medium",
        sale: 12,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 7,
        itemTitle: "Race Performance Socks",
        variance: 3,
        image:
          "https://www.dynafit.com/media/image/fc/24/f5/120b4f2e-45d1-4704-94e8-59e0c6a46984_dynafit_600x600.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Sock",
        thickness: "Medium",
        sale: 12,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 8,
        itemTitle: "Race Performance Socks",
        variance: 4,
        image:
          "https://www.dynafit.com/media/image/e5/88/48/ab3a7f56-758c-426a-a388-f27ac5b66fef_dynafit.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Sock",
        thickness: "Medium",
        sale: 12,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 9,
        itemTitle: "Stripes Short Socks",
        variance: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/5_1_1aef2493-3f2e-4e72-b151-dc2657c8c1b6_600x.jpg?v=1638253739",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 10,
        itemTitle: "Stripes Short Socks",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/5_f5d5a2ce-f2a0-442a-b76e-773309f3d864_600x.jpg?v=1671531447",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 11,
        itemTitle: "Stripes Short Socks",
        variance: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/27_d15e25c4-64cc-4f89-b999-1c3daceae589_600x.jpg?v=1671531535",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 12,
        itemTitle: "Stripes Short Socks",
        variance: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/4_107c8911-17f7-4fb7-bb71-94c0a44589bf_600x.jpg?v=1674629342",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 13,
        itemTitle: "Cute Pattern Warm Socks",
        variance: 1,
        image:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1666109632-socks-1666109627.jpg?crop=1xw:1xh;center,top&resize=480:*",
        stock: "10",
        sold: "5",
        price: 70000,
        height: 110,
        category: "Socks For Women",
        thickness: "Medium",
        sale: 8,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 14,
        itemTitle: "Cute Pattern Warm Socks",
        variance: 2,
        image:
          "https://i5.walmartimages.com/asr/ae0a5cc6-4fd8-453d-bda0-6dadb9d838d1.77ade544b80d369a849d6232870b5d42.jpeg",
        stock: "10",
        sold: "1000",
        price: 70000,
        height: 110,
        category: "Socks For Women",
        thickness: "Medium",
        sale: 8,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 15,
        itemTitle: "Cute Pattern Warm Socks",
        variance: 3,
        image:
          "https://i5.walmartimages.com/asr/0a560411-e78b-4ee9-a95a-31ce46b66a8a.dc69aeafc5bcc2f57f28df9296faa372.jpeg",
        stock: "10",
        sold: "0",
        price: 70000,
        height: 110,
        category: "Socks For Women",
        thickness: "Medium",
        sale: 8,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 16,
        itemTitle: "Cute Pattern Warm Socks",
        variance: 4,
        image:
          "https://i5.walmartimages.com/asr/feedbb25-822b-4bb6-b1f0-c525678e5ce5.7fb518a28b626cee76fca98995113d47.jpeg",
        stock: "10",
        sold: "0",
        price: 70000,
        height: 110,
        category: "Socks For Women",
        thickness: "Medium",
        sale: 8,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 18,
        itemTitle: "Bear Kids Socks",
        variance: 1,
        image:
          "https://kubegallery.com/wp-content/uploads/2022/11/Kids-Socks-Bear.jpg",
        stock: "10",
        sold: "0",
        price: 50000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Medium",
        sale: 15,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 18,
        itemTitle: "Bear Kids Socks",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0249/1083/products/socks101_2048x2048.jpg?v=1589664773",
        stock: "10",
        sold: "0",
        price: 50000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Medium",
        sale: 15,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 19,
        itemTitle: "Bear Kids Socks",
        variance: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HSK00028I_130_047852316712_Hemp_Heather_FLAT_2000x.png?v=1596158649",
        stock: "10",
        sold: "0",
        price: 50000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Medium",
        sale: 15,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 20,
        itemTitle: "Bear Kids Socks",
        variance: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0024/7673/6611/products/KSK786_1_1200x1200.jpg?v=1608349334",
        stock: "10",
        sold: "0",
        price: 50000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Medium",
        sale: 15,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 21,
        itemTitle: "Calming Sleep Winter Socks",
        variance: 1,
        image:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664418084-darn-tough-vermont-women-s-merino-wool-micro-crew-cushion-socks-1563380008.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 22,
        itemTitle: "Calming Sleep Winter Socks",
        variance: 2,
        image:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664418415-41dhPeVtL8L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 23,
        itemTitle: "Calming Sleep Winter Socks",
        variance: 3,
        image:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671735838-smartwool-1671735766.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 24,
        itemTitle: "Calming Sleep Winter Socks",
        variance: 4,
        image: "https://www.rd.com/wp-content/uploads/2020/12/socks2.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 25,
        itemTitle: "Vintage Winter Socks",
        variance: 1,
        image: "https://cdn-amz.woka.io/images/I/61WToW31fsL._SR720,720_.jpg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 26,
        itemTitle: "Vintage Winter Socks",
        variance: 2,
        image: "https://m.media-amazon.com/images/I/51aLGLEBK0L._AC_SX466_.jpg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 27,
        itemTitle: "Vintage Winter Socks",
        variance: 3,
        image: "https://m.media-amazon.com/images/I/51YeW9rCmrL._AC_.jpg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 28,
        itemTitle: "Vintage Winter Socks",
        variance: 4,
        image: "https://m.media-amazon.com/images/I/51G2ZPXB7KL._AC_SX466_.jpg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Socks For Winter",
        thickness: "High",
        sale: 6,
        review: [],
        createdAt: "2023-01-08T18:40:48.113Z",
      },
      {
        productId: 29,
        itemTitle: "Performance Textured Dress Socks",
        variance: 1,
        image:
          "https://mrdavis.com/wp-content/uploads/2020/11/Performance-Dress-Sock-Future-Argyle-Sleet-Brown-e1606589814856.jpg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 4,
        review: [],
        createdAt: "2023-01-09T18:40:48.113Z",
      },
      {
        productId: 30,
        itemTitle: "Performance Textured Dress Socks",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0262/4169/5823/products/Sage-Green-Argyle-Socks-1_1000x1000.jpg?v=1647545038",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 4,
        review: [],
        createdAt: "2023-01-09T18:40:48.113Z",
      },
      {
        productId: 31,
        itemTitle: "Performance Textured Dress Socks",
        variance: 3,
        image:
          "https://cdn.shopify.com/s/files/1/2444/4623/products/CAGL229SCK.jpg?v=1589989826",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 4,
        review: [],
        createdAt: "2023-01-09T18:40:48.113Z",
      },
      {
        productId: 32,
        itemTitle: "Performance Textured Dress Socks",
        variance: 4,
        image:
          "https://i5.walmartimages.com/asr/23059215-ce26-42b1-9115-63a29859f258.ad8af61e107d58b68a7b91d390eb4284.jpeg",
        stock: "13",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 4,
        review: [],
        createdAt: "2023-01-09T18:40:48.113Z",
      },
      {
        productId: 33,
        itemTitle: "Dark Beige Unisex Box",
        variance: 1,
        image: "https://cf.shopee.vn/file/4c987c6fa2838df90e82994f2c609a4d",
        stock: "13",
        sold: "0",
        price: 230000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-10T18:40:48.113Z",
      },
      {
        productId: 34,
        itemTitle: "Dark Beige Unisex Box",
        variance: 2,
        image: "https://cf.shopee.vn/file/f09fe0cc600573a443984d93b5974bf1",
        stock: "13",
        sold: "0",
        price: 230000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-10T18:40:48.113Z",
      },
      {
        productId: 35,
        itemTitle: "Dark Beige Unisex Box",
        variance: 3,
        image: "https://cf.shopee.vn/file/768e60666731427f2ab13ac7abd934d5",
        stock: "13",
        sold: "0",
        price: 230000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-10T18:40:48.113Z",
      },
      {
        productId: 36,
        itemTitle: "Dark Beige Unisex Box",
        variance: 4,
        image: "https://cf.shopee.vn/file/71dd6fb3a6937f80c3c27b0192b69396",
        stock: "13",
        sold: "0",
        price: 230000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-10T18:40:48.113Z",
      },
      {
        productId: 37,
        itemTitle: "Colorful Box",
        variance: 1,
        image: "https://cf.shopee.vn/file/6b5b1803b4ebfd9c605bbd21899f2f44",
        stock: "13",
        sold: "0",
        price: 200000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-11T18:40:48.113Z",
      },
      {
        productId: 38,
        itemTitle: "Colorful Box",
        variance: 2,
        image: "https://cf.shopee.vn/file/886d43dba53f5dd497c0d9d301451019",
        stock: "13",
        sold: "0",
        price: 200000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-11T18:40:48.113Z",
      },
      {
        productId: 39,
        itemTitle: "Colorful Box",
        variance: 3,
        image: "https://cf.shopee.vn/file/9f84d30901fd9081d2e631dd573822fa",
        stock: "13",
        sold: "0",
        price: 200000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-11T18:40:48.113Z",
      },
      {
        productId: 40,
        itemTitle: "Colorful Box",
        variance: 4,
        image: "https://cf.shopee.vn/file/vn-11134207-23010-fvu660cgp5lv5c",
        stock: "13",
        sold: "0",
        price: 200000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-11T18:40:48.113Z",
      },
      {
        productId: 41,
        itemTitle: "Standard Basic Socks",
        variance: 1,
        image:
          "https://5.imimg.com/data5/WC/VP/MY-36458077/mens-white-cotton-socks-500x500.jpg",
        stock: "13",
        sold: "0",
        price: 56000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-12T18:40:48.113Z",
      },
      {
        productId: 42,
        itemTitle: "Standard Basic Socks",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0092/0400/6991/products/136311-3b0430ab35ed469fa180885b9df84cc5_754x.jpg?v=1554038211",
        stock: "13",
        sold: "0",
        price: 56000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-12T18:40:48.113Z",
      },
      {
        productId: 43,
        itemTitle: "Standard Basic Socks",
        variance: 3,
        image:
          "https://i5.walmartimages.com/asr/4d7a80fa-e691-4648-a97a-a5ddc64518cf_1.ecf4cff1a109cdc68ecbc45b4055ff56.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        stock: "13",
        sold: "0",
        price: 56000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-12T18:40:48.113Z",
      },
      {
        productId: 44,
        itemTitle: "Standard Basic Socks",
        variance: 4,
        image:
          "https://i5.walmartimages.com/asr/fc2a4bf3-c8d5-4f39-92f4-fefcc559d31c.be525a08f4dce3ea6922a66d36e06394.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        stock: "13",
        sold: "0",
        price: 56000,
        height: 110,
        category: "Boxes Of Love",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-12T18:40:48.113Z",
      },
      {
        productId: 45,
        itemTitle: "Safari Outdoor Socks",
        variance: 1,
        image:
          "https://safarioutdoor.co.za/media/catalog/product/cache/0dd7366a4cf0e1087f9647bff90747bd/s/n/sniper-socks650265__2.jpg",
        stock: "13",
        sold: "0",
        price: 90000,
        height: 110,
        category: "Socks For Winter",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 46,
        itemTitle: "Safari Outdoor Socks",
        variance: 2,
        image: "https://m.media-amazon.com/images/I/61+qZEP4GmL.jpg",
        stock: "13",
        sold: "0",
        price: 90000,
        height: 110,
        category: "Socks For Winter",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 47,
        itemTitle: "Safari Outdoor Socks",
        variance: 3,
        image:
          "https://ae01.alicdn.com/kf/Ha964e3c8147446c789fe89197ec331e6a/2-Pairs-Merino-Wool-Socks-ZEALWOOD-Unisex-Hiking-Trekking-Skiing-Ankle-Crew-Socks-Thermal-Warm-Winter.jpg_640x640.jpg",
        stock: "13",
        sold: "0",
        price: 90000,
        height: 110,
        category: "Socks For Winter",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 48,
        itemTitle: "Safari Outdoor Socks",
        variance: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0418/6538/0008/products/6_1200x1200.jpg?v=1629879648",
        stock: "13",
        sold: "0",
        price: 90000,
        height: 110,
        category: "Socks For Winter",
        thickness: "Low",
        sale: 10,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 49,
        itemTitle: "Thin Flower Women Socks",
        variance: 1,
        image:
          "https://image.voso.vn/users/vosoimage/images/145bc944f62152406133bc1432370174?t%5B0%5D=compress%3Alevel%3D100&accessToken=0b824b6cf7038a8c60dfc5da923c34adb33e06a6d490d8c4cc3aa46e4efbac71",
        stock: "13",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Women",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 50,
        itemTitle: "Thin Flower Women Socks",
        variance: 2,
        image:
          "https://salt.tikicdn.com/cache/550x550/ts/product/f2/6b/17/94aa3d61c4a365dd2b9ddd996962f3e6.jpg",
        stock: "13",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Women",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 51,
        itemTitle: "Thin Flower Women Socks",
        variance: 3,
        image:
          "https://salt.tikicdn.com/ts/product/3e/1f/14/5fa422cf59875861d38aab7ee41f5b4d.jpg",
        stock: "13",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Women",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 52,
        itemTitle: "Thin Flower Women Socks",
        variance: 4,
        image:
          "https://salt.tikicdn.com/ts/product/f0/3d/97/a7edd3453f834da77a68581ce1023b43.jpg",
        stock: "13",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Women",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-13T18:40:48.113Z",
      },
      {
        productId: 53,
        itemTitle: "Thin Office Working Socks",
        variance: 1,
        image:
          "https://vn-test-11.slatic.net/p/1d629a6d92f303707406e40f3ea3851d.jpg",
        stock: "100",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Men",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-14T18:40:48.113Z",
      },
      {
        productId: 54,
        itemTitle: "Thin Office Working Socks",
        variance: 2,
        image: "https://cf.shopee.vn/file/9aa36de9b86554e1dfb40fd8e84b55fd",
        stock: "100",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Men",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-14T18:40:48.113Z",
      },
      {
        productId: 55,
        itemTitle: "Thin Office Working Socks",
        variance: 3,
        image:
          "https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/7a/a6/b2/6011fea7d38b749cdc194ee22dc9ac58.png",
        stock: "100",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Men",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-14T18:40:48.113Z",
      },
      {
        productId: 56,
        itemTitle: "Thin Office Working Socks",
        variance: 4,
        image: "https://cf.shopee.vn/file/sg-11134201-22120-nhi9a173h6kvdc",
        stock: "100",
        sold: "0",
        price: 48000,
        height: 110,
        category: "Socks For Men",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-14T18:40:48.113Z",
      },
      {
        productId: 57,
        itemTitle: "Animal Baby Socks",
        variance: 1,
        image:
          "https://cdn1.concung.com/storage/images/WebsiteImage/d8e6ca2d84311fb7a71ecc5a78adc36a.jpg",
        stock: "100",
        sold: "0",
        price: 30000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-15T18:40:48.113Z",
      },
      {
        productId: 58,
        itemTitle: "Animal Baby Socks",
        variance: 2,
        image:
          "https://cdn1.concung.com/2015/05/26511-28889-large_mobile/vo-tre-em-chong-truot-kamekid-114.jpg",
        stock: "100",
        sold: "0",
        price: 30000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-15T18:40:48.113Z",
      },
      {
        productId: 59,
        itemTitle: "Animal Baby Socks",
        variance: 3,
        image:
          "https://cdn1.concung.com/2015/05/26511-28890-large_mobile/vo-tre-em-chong-truot-kamekid-114.jpg",
        stock: "100",
        sold: "0",
        price: 30000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-15T18:40:48.113Z",
      },
      {
        productId: 60,
        itemTitle: "Animal Baby Socks",
        variance: 4,
        image:
          "https://cdn1.concung.com/2015/05/26511-28891-large_mobile/vo-tre-em-chong-truot-kamekid-114.jpg",
        stock: "100",
        sold: "0",
        price: 30000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-15T18:40:48.113Z",
      },
      {
        productId: 61,
        itemTitle: "Sporting Supressed Socks",
        variance: 1,
        image:
          "https://lzd-img-global.slatic.net/g/p/b61800a3e41657b68c7b772391c0928a.jpg_1200x1200q80.jpg_.webp",
        stock: "100",
        sold: "0",
        price: 180000,
        height: 110,
        category: "Customized Socks",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-16T18:40:48.113Z",
      },
      {
        productId: 62,
        itemTitle: "Sporting Supressed Socks",
        variance: 2,
        image:
          "https://lzd-img-global.slatic.net/g/p/c7b84d2a21f23660fd3a3901c3d6aba7.jpg_1200x1200q80.jpg_.webp",
        stock: "100",
        sold: "0",
        price: 180000,
        height: 110,
        category: "Customized Socks",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-16T18:40:48.113Z",
      },
      {
        productId: 63,
        itemTitle: "Sporting Supressed Socks",
        variance: 3,
        image: "https://cf.shopee.vn/file/sg-11134201-22110-j7mhjer9owjv7e",
        stock: "100",
        sold: "0",
        price: 180000,
        height: 110,
        category: "Customized Socks",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-16T18:40:48.113Z",
      },
      {
        productId: 64,
        itemTitle: "Sporting Supressed Socks",
        variance: 4,
        image:
          "https://lina.tokyo/wp-content/uploads/2021/12/DHC-Bambi-vo-ap-luc.jpg.webp",
        stock: "100",
        sold: "0",
        price: 180000,
        height: 110,
        category: "Customized Socks",
        thickness: "Low",
        sale: 5,
        review: [],
        createdAt: "2023-01-16T18:40:48.113Z",
      },
    ],
  },
  getters: {
    //ProductItems
    GET_PRODUCT_NUMBER: (state) => {
      return state.productData.length;
    },
    GET_PRODUCT_ITEMS: (state) => {
      return state.productData;
    },
    GET_PRODUCT_ITEM_BY_ID: (state) => (id) => {
      return state.productData.find(
        (productItem) => productItem.productId === id
      );
    },
    GET_PRODUCT_ITEM_BY_NAME: (state) => (name) => {
      return state.productData.filter(
        (productItem) => productItem.itemTitle === name
      );
    },
    GET_PRODUCT_ITEM_BY_CATEGORY: (state) => (category) => {
      return state.productData.filter(
        (productItem) => productItem.category === category
      );
    },
  },
  setters: {},
  mutations: {
    ADD_PRODUCT_ITEM: (state, data) => {
      state.productData.push(data);
    },
    CHANGE_PRODUCT_STOCK: (state, payload) => {
      const index = state.productData.findIndex((item) => {
        return item.productId === payload.productId;
      });
      if (index !== -1) {
        state.productData[index].stock += payload.quantity;
      }
    },
    CHANGE_PRODUCT_ITEM: (state, payload) => {
      const index = state.productData.findIndex((item) => {
        return item.productId === payload.productId;
      });
      if (index !== -1) {
        state.productData[index] = payload;
      }
    },
    DELETE_PRODUCTS_ID: (state, payload) => {
      state.productData = state.productData.filter(
        (item) => !payload.includes(item.productId)
      );
    },
    DELETE_PRODUCT_ID: (state, id) => {
      state.productData.splice(
        state.productData.findIndex((item) => item.productId === id),
        1
      );
    },
  },
};

export default products;
