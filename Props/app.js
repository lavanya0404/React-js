import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
          alt="logo"
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg"
              alt="cart"
              className="cart-icon"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

const stylecard = {
  backgroundColor: "#fff0f0",
};

const resList = [
  {
  info: {
    id: "878275",
    name: "Lo! - Low Carb and Keto Foods",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/3870ab11-e437-471d-951a-283b08741e1e_878275.jpg",
    locality: "Lalbagh Road",
    areaName: "AUSTIN TOWN",
    costForTwo: "₹300 for two",
    cuisines: ["Continental", "Healthy Food", "North Indian", "Biryani"],
    avgRating: 4.7,
    parentId: "8282",
    avgRatingString: "4.7",
    totalRatingsString: "20+",
    promoted: true,
    adTrackingId:
      "cid=14727427~p=0~adgrpid=14727427#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=878275~eid=dc731575-34ef-4578-8433-fcf07386dc88~srvts=1719412141643~collid=45995",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-27 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  
    "analytics": {
                    
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=108109",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
  },
  {
    info: {
      id: "788304",
      name: "Wow! China",
      cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
      locality: "Near Shanti Nagar Bus Stop",
      areaName: "Shantinagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.7,
      parentId: "226836",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    
      "analytics": {
                      
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=108109",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  },
  {
    info: {
      id: "108109",
      name: "Kabab Magic",
      cloudinaryImageId: "n2kdrmerp4xec1sxb3sw",
      locality: "Basavanagudi",
      areaName: "Basavanagudi",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "South Indian", "Mexican", "Kerala"],
      avgRating: 4.4,
      parentId: "527",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=14726401~p=1~adgrpid=14726401#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=108109~eid=fe6b2cff-3aaf-4a1a-8c92-cd7a31e0ef1d~srvts=1719412141643~collid=45995",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    
    
      "analytics": {
                      
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=108109",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  }
];

// Destructuring
const RestroCard1 = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={stylecard}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/zbrpxvywfsrrb7os11jf"
        className="res-img"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h5>4.4 stars</h5>
      <h5>Delivered in : 15 minutes</h5>
    </div>
  );
};
const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={stylecard}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n2kdrmerp4xec1sxb3sw"
        className="res-img"
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(" ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestroCard resData={resList[0]} />
        <RestroCard resData={resList[1]} />
        <RestroCard resData={resList[2]} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
