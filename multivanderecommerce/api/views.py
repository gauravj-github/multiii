from rest_framework.response import Response
from rest_framework import generics,permissions , pagination
from .serializer import (VendorSerializer , VendorDetailSerializer , ProductSerializer,ProductDetailSerializer
,CustomerSerializer ,CustomerDetailSerializer,OrderSerializer,OrderDetailSerializer,CustomerAddressSerializer,
ProductRatingSerializer,CategorySerializer,CategoryDetailSerializer)
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets


from .models import *
# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class  = VendorSerializer
    # permission_classes =[permissions.IsAuthenticated]


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class  = VendorDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]


class ProductsList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer
    pagination_class =pagination.LimitOffsetPagination
    # permission_classes =[permissions.IsAuthenticated]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]

#customer
class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class  = CustomerSerializer
    # permission_classes =[permissions.IsAuthenticated]

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class  = CustomerDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]



# orders
class OrdersList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class  = OrderSerializer
    # permission_classes =[permissions.IsAuthenticated]


class OrdersDetail(generics.ListAPIView):
    # queryset = OrderItem.objects.all()
    serializer_class  = OrderDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]

    def get_queryset(self):
        order_id  = self.kwargs['pk']
        order = Order.objects.get(id = order_id)
        order_items = OrderItem.objects.filter(order = order)
        return order_items
    


    #CustomerAddress
class CustometrAddressViewset(viewsets.ModelViewSet):
    queryset = CustomerAddress.objects.all()
    serializer_class  = CustomerAddressSerializer
    # permission_classes =[permissions.IsAuthenticated]


#Product rating
class ProductRatingViewset(viewsets.ModelViewSet):
    queryset = Productrating.objects.all()
    serializer_class  = ProductRatingSerializer
    # permission_classes =[permissions.IsAuthenticated]



# Productcategortlist
class CategoryList(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class  = CategorySerializer
    # permission_classes =[permissions.IsAuthenticated]


class  CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class  = CategoryDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]