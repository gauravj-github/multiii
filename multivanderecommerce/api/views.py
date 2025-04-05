from rest_framework.response import Response
from rest_framework import generics,permissions , pagination
from .serializer import (VendorSerializer , VendorDetailSerializer , ProductSerializer,ProductDetailSerializer
,CustomerSerializer ,CustomerDetailSerializer,OrderSerializer,OrderDetailSerializer,CustomerAddressSerializer,
ProductRatingSerializer,CategorySerializer,CategoryDetailSerializer,OrderItemSerializer,ProductImageSerializer,WishlistSerializer,UserSerializer)
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






class ProductsList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer
    pagination_class =pagination.LimitOffsetPagination
    # permission_classes =[permissions.IsAuthenticated]

    
    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')
        if category_id:
          try:
             category = ProductCategory.objects.get(id=category_id)
             qs = qs.filter(category=category)
          except ProductCategory.DoesNotExist:
             raise Http404("Category not found.")  # Return a 404 response
        # limit = int(self.request.GET.get('fetch_limit'))
        # # print(type(limit))
        # if limit:
        #   try:
        #      qs = qs[:limit]
            # Return a 404 response
        vendor_product = self.request.GET.get('vendor_product')
        if vendor_product:
            qs = Product.objects.filter(vendor__id=vendor_product)        
        return qs

class ProductsImgsList(generics.ListCreateAPIView):
    queryset = ProductImage.objects.all()
    serializer_class  = ProductImageSerializer




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
    #    print(tag)
       product = Product.objects.get(id=tag )
       qs = qs.filter(category=product.category).exclude(id=tag)
    #    print(qs)

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
        # print(customer_id,"ihihb")
        if not customer_id:
           return Response({"error": "customer_id is required"}, status=status.HTTP_400_BAD_REQUEST)
    
        try:
          customer = Customer.objects.get(id=customer_id)
        except Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)
    
    # Check if orders exist for the customer
        existing_order = Order.objects.filter(customer=customer).first()
        # print(existing_order,"jbhk")
        if existing_order:
           serialize = self.get_serializer(existing_order)
        #    print(serialize.data,"oufhs")
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

class CustomerOrdersItemsList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class  = OrderItemSerializer
    # permission_classes =[permissions.IsAuthenticated]
    def get_queryset(self):      
       qs = super().get_queryset()
       print(qs,"jbmhv")
       t = self.kwargs['id']
       print(t,"mbvnmvb")
       qs = qs.filter(order__customer__id=t)
       print(qs)
       return (qs)


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
class CustomerAddressViewset(viewsets.ModelViewSet):
    queryset = CustomerAddress.objects.all()
    serializer_class  = CustomerAddressSerializer
    # permission_classes =[permissions.IsAuthenticated]
    def create(self, request, *args, **kwargs):
        customer_id = request.data.get('customer')
        address = request.data.get('address')
        
        # Check if customer is provided
        if not customer_id:
            return Response({'error': 'customer field is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if address is provided
        if not address:
            return Response({'error': 'address field is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the customer exists in the database
        if not Customer.objects.filter(id=customer_id).exists():
            return Response({'error': 'Customer does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the customer already has the same address
        existing_address = CustomerAddress.objects.filter(customer_id=customer_id, address=address).exists()
        if existing_address:
            return Response({'error': 'This address already exists for the customer'}, status=status.HTTP_400_BAD_REQUEST)

        # If the customer doesn't already have this address, proceed to create the address
        return super().create(request, *args, **kwargs)


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
               customer = Customer.objects.get(user=user)
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
@csrf_exempt
@api_view(['POST'])
def  Customer_registration(request):
        user_data = request.data        
        # print(user_data)

        username = user_data.get('username')
        email = user_data.get('email')
        password = user_data.get('password')
        first_name=user_data.get('first_name')
        last_name=user_data.get('last_name')
        mobile =user_data.get('mobile')
        if User.objects.filter(username=username).exists():
            return Response({"msg":"Username is already taken"}) 
        if User.objects.filter(email=email).exists():
            return Response({"msg":"email is already taken"})

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
    
@api_view(['GET'])
def update_order_status(request,order_id):
    # print(order_id,"khb")
    if request.method =="POST":
       updateRes = OrderItem.objects.filter(order=order_id).update(order_status = True)
    #    print(updateRes ,"dhvbkdb")
       msg={
           'bool':False
       }
       if updateRes :
           msg ={
               'bool':True
           }
    return Response(msg)



@csrf_exempt
def update_product_download(request, id ,orderid):
    print(orderid ,"skdhbv")

    if request.method == "POST":
        print(request.method)
        try:
            product = Product.objects.get(id=id)
            # print(product)

            product.downloads += 1
            product.save()  # ✅ Save changes

            updated_product = Product.objects.get(id=id)

            return JsonResponse({
                'bool': True,
                'update': True,
                'download': updated_product.downloads  # ✅ Return updated count
            })
        except Product.DoesNotExist:
            return JsonResponse({'bool': False, 'error': 'Product not found'}, status=404)
    else:
        return JsonResponse({'bool': False, 'error': 'Invalid request method'}, status=400)



class  Wishlists(generics.ListCreateAPIView):
    queryset = Wishlist.objects.all()
    serializer_class  = WishlistSerializer
    # permission_classes =[permissions.IsAuthenticated]
    
@csrf_exempt
@api_view(["POST"])
def check_in_wishlist(request):
    if request.method == "POST":
        # try:
            product_id=request.POST.get('product')
            customer_id=request.POST.get('customer')
            # print(product_id,customer_id,"same")
            if not product_id and not customer_id:
                return JsonResponse({"error":"missing data"})
            checkwishlist = Wishlist.objects.filter(product_id=product_id,customer_id=customer_id).count()
            if checkwishlist>0:
                return JsonResponse({"bool":True})
            else:
                 return JsonResponse({"bool":False})
            
class WishitemsList(generics.ListCreateAPIView):
    queryset = Wishlist.objects.all()
    serializer_class  = WishlistSerializer
    def get_queryset(self):      
       qs = super().get_queryset()
    #    print(qs,"jbmhv")
       customer__id = self.kwargs['pk']
    #    print(t,"mbvnmvb")
       qs = qs.filter(customer__id=customer__id)
    #    print(qs)
       return (qs)
    
@csrf_exempt
@api_view(["POST"])
def remove_from_wishlist(request):
    if request.method == "POST":
        # try:
            product_id=request.POST.get('product_id')
            # print(product_id,customer_id,"same")
            if not product_id:
                return JsonResponse({"error":"missing data"})
            checkwishlist = Wishlist.objects.filter(product_id=product_id)
            if checkwishlist:
                checkwishlist.delete()
                return JsonResponse({"bool":True})
            else:
                 return JsonResponse({"bool":False})
            



class  UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class  = UserSerializer
    # permission_classes =[permissions.IsAuthenticated]


class CustomerAddressList(generics.ListCreateAPIView):
    queryset = CustomerAddress.objects.all()
    serializer_class  = CustomerAddressSerializer
    
    def get_queryset(self):      
       qs = super().get_queryset()
    #    print(qs,"jbmhv")
       customer__id = self.kwargs['pk']
    #    print(t,"mbvnmvb")
       qs = qs.filter(customer__id=customer__id)
    #    .order_by('id')
    #    print(qs)
       return (qs)
    
    
@csrf_exempt
@api_view(["POST"])
def mark_defaut_address(request,pk):
    if request.method == "POST":
        # try:
            address_id=request.POST.get('address_id')
            # print(product_id,customer_id,"same")
            if not address_id:
                return JsonResponse({"error":"missing data"})
            CustomerAddress.objects.update(default_address=False)
            checkwishlist = CustomerAddress.objects.filter(id=address_id).update(default_address=True)
            if checkwishlist:
                return JsonResponse({"bool":True})
            else:
                 return JsonResponse({"bool":False})

@csrf_exempt
@api_view(["POST"])
def customerDashboard(request,pk):
    if request.method == "POST":
        # try:
            customer_id=pk
            # print(product_id,customer_id,"same")
            if not customer_id:
                return JsonResponse({"error":"missing data"})
            Addresscount = CustomerAddress.objects.filter(customer_id=customer_id).count()
            Wishlistcount = Wishlist.objects.filter(id=customer_id).count()
            ordercount = Order.objects.filter(id=customer_id).count()
            if Addresscount:
                return JsonResponse({"bool":True,"Addresscount":Addresscount,"Wishlistcount":Wishlistcount,"ordercount":ordercount})
            else:
                 return JsonResponse({"bool":False,"totalcount":0})
            


#vendor all views

# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class  = VendorSerializer
    # permission_classes =[permissions.IsAuthenticated]


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class  = VendorDetailSerializer
    # permission_classes =[permissions.IsAuthenticated]


#vendor resistration
@csrf_exempt
@api_view(['POST'])
def  vendor_registration(request):
        user_data = request.data        
        print(user_data)

        first_name=user_data.get('firstname')
        last_name=user_data.get('lastname')
        username = user_data.get('username')
        email = user_data.get('email')
        password = user_data.get('password')
        mobile =user_data.get('mobile')
        address=user_data.get('address')
        if User.objects.filter(username=username).exists():
            return Response({"msg":"Username is already taken"}) 
        if User.objects.filter(email=email).exists():
            return Response({"msg":"email is already taken"})
        # if (email):
        #     c =User.objects.filter(email=email).exists()
        #     msg={
        #       'bool':False,
        # 'msg':"email is already exiest" 
        #   }
        #     print(c)
        #     return Response(msg)
        # print(username,email,password,first_name,last_name,mobile,address)
        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password),
              last_name=last_name,
              first_name=first_name
                  
        )
        if user:
           Vendor.objects.create(user = user , mobile = mobile,address=address)
        
        return Response({"msg":"user is created"})



#vendor login
@csrf_exempt
@api_view(['POST'])
def vendor_login(request):
    # if request.is_ajax():
    if request.method == "POST":
      username = request.POST.get('username')  
      password = request.POST.get('password')
      user = authenticate(username=username,password=password)

      if user:
               vendor = Vendor.objects.get(user = user)
               msg={
        'bool':True,
        'post':request.POST,
        'id':vendor.id
      }
      else:
          msg={
              'bool':False,
        'msg':"Invalid username and password!" 
          }
      return JsonResponse(msg)
    



   