# shopping_cart_using_react_and_redux

In this i am trying to create shopping cart sample using react and redux. As of now, i have added only promo code in redux state and will add another states later.

In this user can also use promo code 'DISCOUNT' to save another 10%. 

![](https://github.com/tushargoel86/shopping_cart_using_react_and_redux/blob/master/Shopping_cart.JPG)   ![](https://github.com/tushargoel86/shopping_cart_using_react_and_redux/blob/master/ShowItemDetails.JPG)

![](https://github.com/tushargoel86/shopping_cart_using_react_and_redux/blob/master/PromoCode.JPG)


# Tools used:
1) Create-react-app cli
2) react-bootstrap
3) react-redux


Directory Structure:

```
C:.
│   README.md
│
└───src
    │   App.css
    │   App.js
    │   App.test.js
    │   index.js
    │   serviceWorker.js
    │   store.js
    │
    ├───actions
    │       promoCodeActions.js
    │       types.js
    │
    ├───components
    │       EstimatedTotal.js
    │       ItemDetails.js
    │       PickupSavings.js
    │       Promocode.js
    │       SubTotal.js
    │       TaxesAndFees.js
    │
    └───reducers
            index.js
            promoCodeReducers.js
```


