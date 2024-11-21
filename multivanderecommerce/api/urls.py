from django.urls import path
from .views import*
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('address', CustometrAddressViewset)
router.register('productrating', ProductRatingViewset)


urlpatterns = [
    # vender
    path('vendors/',VendorList.as_view()),
    path('vendor/<int:pk>',VendorDetail.as_view()),
     #product
    path('products/',ProductsList.as_view()),
    path('product/<int:pk>',ProductDetail.as_view()),

    #product category
    path('caterories/',CategoryList.as_view()),
    path('caterory/<int:pk>',CategoryDetail.as_view()),
   #customer
    path('customers/',CustomerList.as_view()),
    path('customer/<int:pk>',CustomerDetail.as_view()),
    #orders
    path('orders/',OrdersList.as_view()),
    path('order/<int:pk>',OrdersDetail.as_view()),
]
urlpatterns += router.urls
