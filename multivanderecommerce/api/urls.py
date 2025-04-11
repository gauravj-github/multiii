from django.urls import path
from .views import*
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register('address', CustomerAddressViewset)
router.register('productrating', ProductRatingViewset)


urlpatterns = [
    # vender
    path('vendors/',VendorList.as_view()),
    path('vendor/<int:pk>',VendorDetail.as_view()),
    path('vendor/registration/',vendor_registration),
    path('vendor/login/',vendor_login),

     #productvendor/registration/
    path('products/',ProductsList.as_view()),
    path('products/<slug:tag>',TagProductsList.as_view()),
    path('product/<int:pk>',ProductDetail.as_view()),
    path('related-product/<int:pk>',RelatedProductsList.as_view()),
    path('product-img/',ProductsImgsList.as_view()),
    path('productdeleteimagemultiple/<int:pk>',ProductsDetailImgs.as_view()),
    path('vendororderlist/<int:pk>',VendorOrdersItemsList.as_view()),
    path('vendorcustomeerlist/<int:pk>',VendorCustomerList.as_view()),
    



    #product category
    path('caterories/',CategoryList.as_view()),
    path('caterory/<int:pk>',CategoryDetail.as_view()),
   #customer
    path('customers/',CustomerList.as_view()),
    path('customer/<int:pk>',CustomerDetail.as_view()),
    # customerlogin
    path('customer/login',Customer_login),
    path('customer/registration',Customer_registration),
    #customeraddressadd
    # path('customer_address/',CustometrAddressViewset.as_view()),
    #orders
    path('orders/',OrdersList.as_view()),
    path('order/<int:pk>',OrdersDetail.as_view()),    
    path('orderItem/',OrdersItemsList.as_view()),
    path('update-order-status/<int:order_id>',update_order_status),
    path('customer-all-order/<int:id>',CustomerOrdersItemsList.as_view()),
    path('update_product_download/<int:id>/<int:orderid>',update_product_download),
    path('Wishlist/',Wishlists.as_view()),
     path('check-in-wishlist/',check_in_wishlist),
     path('remove-from-wishlist/',remove_from_wishlist),
    path('customer/<int:pk>/wishitems/',WishitemsList.as_view()),
    path('user_update/<int:pk>',UserDetail.as_view()),    
    path('customer/<int:pk>/address-list/',CustomerAddressList.as_view()),
    path('mark-defaut-address/<int:pk>/',mark_defaut_address),    
     path('customer/dashboard/<int:pk>/',customerDashboard),
     path('vendor/dashboard/<int:pk>/',vendorDashboard),
     path('vendor/<int:vendor_id>/customer/<int:customer_id>',VendororderList.as_view()),
    path('latestproduct/',LatestProductList.as_view()),



    #  path("productss/",pd)

    # mark_defaut_address

    # path('jgv/',t)
]
urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
