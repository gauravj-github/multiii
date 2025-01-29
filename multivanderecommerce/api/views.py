from rest_framework.response import Response
from rest_framework import generics,permissions , pagination
from .serializer import (VendorSerializer , VendorDetailSerializer , ProductSerializer,ProductDetailSerializer
,CustomerSerializer ,CustomerDetailSerializer,OrderSerializer,OrderDetailSerializer,CustomerAddressSerializer,
ProductRatingSerializer,CategorySerializer,CategoryDetailSerializer,OrderItemSerializer,ProductImageSerializer)
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets
from .models import ProductCategory
from rest_framework.decorators import api_view
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from .models import *
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User 




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

    def get_queryset(self):
       qs = super().get_queryset()
       category_id = self.request.GET.get('category')
       print(category_id)  # Safely retrieve query parameter
       if category_id:
         try:
            category = ProductCategory.objects.get(id=category_id)
            qs = qs.filter(category=category)
         except ProductCategory.DoesNotExist:
            raise Http404("Category not found.")  # Return a 404 response
       return qs


class TagProductsList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # pagination_class = LimitOffsetPagination  # You can use PageNumberPagination if you prefer

    def get_queryset(self):
        # Safely get 'tag' from URL parameters
        tag = self.kwargs.get('tag')
        if not tag:
            return Product.objects.none()  # Return empty queryset if no tag
        c=Product.objects.filter(tag__icontains=tag)
        # Filter products by tag (assuming 'tags' is a Many-to-Many relationship)
        return c  # Adjust as needed based on how 'tags' is defined

class RelatedProductsList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer
    # pagination_class =pagination.LimitOffsetPagination
    # permission_classes =[permissions.IsAuthenticated]

    def get_queryset(self):      
       qs = super().get_queryset()
       tag = self.kwargs['pk']
       print(tag)
       product = Product.objects.get(id=tag )
       qs = qs.filter(category=product.category).exclude(id=tag)
       print(qs)

       return qs
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


    def create(self, request, *args, **kwargs):
        customer_id = request.GET.get('customer_id')
        if not customer_id:
           return Response({"error": "customer_id is required"}, status=status.HTTP_400_BAD_REQUEST)
    
        try:
          customer = Customer.objects.get(id=customer_id)
        except Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)
    
    # Check if orders exist for the customer
        existing_order = Order.objects.filter(customer=customer).first()
        print(existing_order,"jbhk")
        if existing_order:
           serialize = self.get_serializer(existing_order)
           print(serialize.data,"oufhs")
           return Response(
            serialize.data
        )
    
        # Create a new order if no existing orders are found
        order = Order.objects.create(customer=customer)
        serializer = self.get_serializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

       
class OrdersItemsList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class  = OrderItemSerializer
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


# @api_view(['GET'])
# def t(request):
#     product_images = ProductImage.objects.all()
#     serializer = ProductImageSerializer(product_images, many=True)
#     return Response(serializer.data)  # Use `.data` to get serialized data

@csrf_exempt
@api_view(['POST'])
def Customer_login(request):
    # if request.is_ajax():
    if request.method == "POST":
      username = request.POST.get('username')  
      password = request.POST.get('password')
      user = authenticate(username=username,password=password)

      if user:
               customer = Customer.objects.get(user = user)
               msg={
        'bool':True,
        'post':request.POST,
        'id':customer.id
      }
      else:
          msg={
              'bool':False,
        'msg':"Invalid username and password!" 
          }
      return JsonResponse(msg)
@api_view(['POST'])
def  Customer_registration(request):
        user_data = request.data        
        print(user_data)

        username = user_data.get('username')
        email = user_data.get('email')
        password = user_data.get('password')
        first_name=user_data.get('first_name')
        last_name=user_data.get('last_name')
        mobile =user_data.get('mobile')
        # if (email):
        #     c =User.objects.filter(email=email).exists()
        #     msg={
        #       'bool':False,
        # 'msg':"email is already exiest" 
        #   }
        #     print(c)
        #     return Response(msg)
        print(username,email,password,first_name,last_name  )
        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password),
              last_name=last_name,
              first_name=first_name
                  
        )
        if user:
           Customer.objects.create(user = user , mobile = mobile)
        
        return Response({"msg":"user is created"})
    
@api_view(['POST'])
def update_order_status(request,order_id):
    print(order_id)
    if request.method =="POST":
       updateRes = Order.objects.filter(id =order_id).update(order_status = True)
       msg={
           'bool':False
       }
       if updateRes :
           msg ={
               'bool':True
           }

    return JsonResponse(msg)