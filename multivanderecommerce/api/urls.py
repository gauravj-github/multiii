from django.urls import path
from .views import*
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register('address', CustometrAddressViewset)
router.register('productrating', ProductRatingViewset)


urlpatterns = [
    # vender
    path('vendors/',VendorList.as_view()),
    path('vendor/<int:pk>',VendorDetail.as_view()),
     #product
    path('products/',ProductsList.as_view()),
    path('products/<slug:tag>',TagProductsList.as_view()),
    path('product/<int:pk>',ProductDetail.as_view()),
    path('related-product/<int:pk>',RelatedProductsList.as_view()),


    #product category
    path('caterories/',CategoryList.as_view()),
    path('caterory/<int:pk>',CategoryDetail.as_view()),
   #customer
    path('customers/',CustomerList.as_view()),
    path('customer/<int:pk>',CustomerDetail.as_view()),
    # customerlogin
    path('customer/login',Customer_login),
    path('customer/registration',Customer_registration),
    #orders
    path('orders/',OrdersList.as_view()),
    path('order/<int:pk>',OrdersDetail.as_view()),    
    path('orderItem/',OrdersItemsList.as_view()),
    path('update-order-status/<int:order_id>',update_order_status),

    # path('jgv/',t)
]
urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
