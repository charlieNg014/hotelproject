// import room1 from "./images/details-1.jpeg";
// import room2 from "./images/details-2.jpeg";
// import room3 from "./images/details-3.jpeg";
// import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

import se1 from './images/singleeco1.jpg';
import se2 from './images/singleeco2.jpg';
import se3 from './images/singleeco3.jpg';
import sg1 from './images/singlebs1.jpg';
import sg2 from './images/singlebs2.jpg';
import sg3 from './images/singlebs3.jpg';
import st1 from './images/singlest1.jpg';
import st2 from './images/singlest2.jpg';
import st3 from './images/singlest3.jpg';
import sd1 from './images/singledx1.jpg';
import sd2 from './images/singledx2.jpg';
import sd3 from './images/singledx3.jpg';
import de1 from './images/doubleeco1.jpg';
import de2 from './images/doubleeco2.jpg';
import de3 from './images/doubleeco3.jpg';
import db1 from './images/doublebs1.jpg';
import db2 from './images/doublebs2.jpg';
import db3 from './images/doublebs3.jpg';
import dt1 from './images/doublest1.jpg';
import dt2 from './images/doublest2.jpg';
import dt3 from './images/doublest3.jpg';
import dd1 from './images/doubledx1.jpg';
import dd2 from './images/doubledx2.jpg';
import dd3 from './images/doubledx3.jpg';
import fe1 from './images/familyeco1.jpg';
import fe2 from './images/familyeco2.jpg';
import fe3 from './images/familyeco3.jpg';
import fb1 from './images/familybs1.jpg';
import fb2 from './images/familybs2.jpg';
import fb3 from './images/familybs3.jpg';
import ft1 from './images/familyst1.jpg';
import ft2 from './images/familyst2.jpg';
import ft3 from './images/familyst3.jpg';
import fd1 from './images/familydx1.jpg';
import fd2 from './images/familydx2.jpg';
import fd3 from './images/familydx3.jpg';
import ps1 from './images/presidential1.jpg';
import ps2 from './images/presidential2.jpg';
import ps3 from './images/presidential3.jpg';



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Single room, size 9,5-13m², is a small and simple room offering everything necessary for a comfortable stay : 1 single bed, free WiFi, TV, a work desk and a private bathroom with shower. Internet: complimentary WiFi is available in all hotel rooms.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img1
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: se1
            }
          }
        },
        {
          fields: {
            file: {
              url: se2
            }
          }
        },
        {
          fields: {
            file: {
              url: se3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "single basic",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Single basic room, size 9,5-13m², is a small and simple room offering everything necessary for a comfortable stay : 1 single bed, free WiFi, TV, a work desk and a private bathroom with shower.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img2
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: sg1
            }
          }
        },
        
        {
          fields: {
            file: {
              url: sg2
            }
          }
        },
        {
          fields: {
            file: {
              url: sg3

            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Enjoy the overview of the mountains surrounding the city and the lake, while experiencing the warmth provided from the ecological construction materials and east orientation of the rooms.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img3
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: st1
            }
          }
        },
        {
          fields: {
            file: {
              url: st2
            }
          }
        },
        {
          fields: {
            file: {
              url: st3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Deluxe Single Rooms provide a twin bed, a writing desk, television, complimentary wifi internet access and air conditioning.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img4
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: sd1
            }
          }
        },
        {
          fields: {
            file: {
              url: sd2
            }
          }
        },
        {
          fields: {
            file: {
              url: sd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Economy Double Room. Our Economy Double Room can accommodate 2 persons. The room has one double bed (150 x 200 cm) and a private shower and toilet. All the rooms come with Free WiFi, flat screen TV, heating, desk, hair dryer and telephone.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img5
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: de1
            }
          }
        },
        {
          fields: {
            file: {
              url: de2
            }
          }
        },
        {
          fields: {
            file: {
              url: de3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "The most tiny rooms of the hotel, designed in case you want to enjoy the charm of La Seu d’Urgell at the best price.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img6
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: db1
            }
          }
        },
        {
          fields: {
            file: {
              url: db2
            }
          }
        },
        {
          fields: {
            file: {
              url: db3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Our Standard Double rooms are located at the front of the building and enjoy a bright, sunny aspect all day long.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img7
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: dt1
            }
          }
        },
        {
          fields: {
            file: {
              url: dt2
            }
          }
        },
        {
          fields: {
            file: {
              url: dt3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "A delightful deluxe room offering a double bed and private bathroom. It features LED Television, IDD/DD Phone, dressing table & chair, tea and coffee making facilities , bathroom with monsoon shower and heated towel rails.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img8
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: dd1
            }
          }
        },
        {
          fields: {
            file: {
              url: dd2
            }
          }
        },
        {
          fields: {
            file: {
              url: dd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Room Description Family room, with the size of 30,5m², is the largest one in the hotel and can accommodate up to 5 people. Room has 3 single beds and a sofa that turns into a bed. Room can also fit 1 extra bed or 1 baby cot. Sofa bed is comfortable for one adult or up to 2 kids",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img9
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: fe1
            }
          }
        },
        {
          fields: {
            file: {
              url: fe2
            }
          }
        },
        {
          fields: {
            file: {
              url: fe3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "You will have everything you need in our 'basic' family rooms. It immediately feels warm and familiar when you enter. You will have lovely spacious beds, private bathroom (with shower or bath), TV, free WiFi and a modest seat. The basic rooms offer simplicity in style and the utmost attention has been paid for a pleasant stay. Here you can relax and start and end your day in peace and quiet. Naturally, you can enjoy some extra relaxation in our nice lounge area, with a drink at the bar or in a sunny spot on the terrace.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img10
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: fb1
            }
          }
        },
        {
          fields: {
            file: {
              url: fb2
            }
          }
        },
        {
          fields: {
            file: {
              url: fb3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Two separate bedrooms with shared bathroom. Renovated rooms are with shower, toilet, bidet, hairdryer, telephone, safe, SAT-LED-TV (in both rooms), free Wi-Fi, sofa bed, small desk, small fridge and with balcony.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img11
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: ft1
            }
          }
        },
        {
          fields: {
            file: {
              url: ft2
            }
          }
        },
        {
          fields: {
            file: {
              url: ft3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: img12
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: fd1
            }
          }
        },
        {
          fields: {
            file: {
              url: fd2
            }
          }
        },
        {
          fields: {
            file: {
              url: fd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Exuding a sense of ultimate luxury through modern design and amenities, our Presidential Suite is truly one of a kind! Spanning over an incredible area of 200 sq. m. (2153 sq. ft.), this exquisite Suite is exclusively located on the 2nd floor of the main building, in the heart of the hotel and near to all hotel services, offering direct views of the sea and the entire complex.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      // image: [
      //   {
      //     fields: {
      //       file: {
      //         url: room1
      //       }
      //     }
      //   }
      // ],
      images: [
        {
          fields: {
            file: {
              url: ps1
            }
          }
        },
        {
          fields: {
            file: {
              url: ps2
            }
          }
        },
        {
          fields: {
            file: {
              url: ps3
            }
          }
        }
      ]
    }
  }
];
