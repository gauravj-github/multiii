from rest_framework import serializers
from .views import *
from .models import *


class VendorSerializer(serializers.ModelSerializer):
     class Meta:
          model = Vendor
          fields =['id','user','address']
     def __init__(self,*args,**kwargs):
          super(VendorSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1
          


class VendorDetailSerializer(serializers.ModelSerializer):
     class Meta:
          model = Vendor
          fields =['id','user','address']
     def __init__(self,*args,**kwargs):
          super(VendorDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1

class ProductSerializer(serializers.ModelSerializer):
     product_rating = serializers.StringRelatedField(many = True , read_only = True)

     class Meta:
          model = Product
          fields =['id','user','category','title','slug','tag_list','image','detail','price','product_rating','demo_url']
     def __init__(self,*args,**kwargs):
          super(ProductSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1

class ProductImageSerializer(serializers.ModelSerializer):
     class Meta:
          model = ProductImage
          fields =['id','Product','image']

class ProductDetailSerializer(serializers.ModelSerializer):
     product_rating = serializers.StringRelatedField(many = True , read_only = True)
     product_imgs = ProductImageSerializer(many=True,read_only=True)
     class Meta:
          model = Product
          fields =['id','user','category','title','slug','tag_list','detail','price','image','product_rating','product_imgs']
     def __init__(self,*args,**kwargs):
          super(ProductDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1


class CustomerSerializer(serializers.ModelSerializer):
     class Meta:
          model = Customer
          fields =['id','user','mobile']
     def __init__(self,*args,**kwargs):
          super(CustomerSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1
          


class CustomerDetailSerializer(serializers.ModelSerializer):
     class Meta:
          model = Customer
          fields =['id','user','address','mobile']
     def __init__(self,*args,**kwargs):
          super(CustomerDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1


class OrderSerializer(serializers.ModelSerializer):
     class Meta:
          model = Order
          fields =['id','customer','order_time','order_status']
     # def __init__(self,*args,**kwargs):
     #      super(OrderSerializer,self).__init__(*args, **kwargs)
     #      self.Meta.depth =1
     
class OrderItemSerializer(serializers.ModelSerializer):
     class Meta:
          model = OrderItem
          fields =['id','order','product','qty','price']
     # def __init__(self,*args,**kwargs):
     #      super(OrderSerializer,self).__init__(*args, **kwargs)
     #      self.Meta.depth =1
          


class OrderDetailSerializer(serializers.ModelSerializer):
     class Meta:
          model = OrderItem
          fields =['id','order','product','qty','price']
     def __init__(self,*args,**kwargs):
          super(OrderDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1
     
class CustomerAddressSerializer(serializers.ModelSerializer):
     class Meta:
          model = CustomerAddress
          fields =['id','customer','address','default_address']
     def __init__(self,*args,**kwargs):
          super(CustomerAddressSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1


class ProductRatingSerializer(serializers.ModelSerializer):
     class Meta:
          model = Productrating
          fields =['id','customer','product','rating','reviews','add_time']
     def __init__(self,*args,**kwargs):
          super(ProductRatingSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1


class CategorySerializer(serializers.ModelSerializer):
     class Meta:
          model = ProductCategory
          fields =['id','title','detail']
     def __init__(self,*args,**kwargs):
          super(CategorySerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1
          


class CategoryDetailSerializer(serializers.ModelSerializer):
     class Meta:
          model = ProductCategory
          fields =['id','title','detail']
     def __init__(self,*args,**kwargs):
          super(CategoryDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1


# class Cusdtomer_loginserializer(serializers.ModelSerializer):
#      class Meta:
#           model=User
#           fields = ['id','username','']