from rest_framework import serializers
from .views import *
from .models import *
from django.contrib.auth.models import User 


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

class ProductImageSerializer(serializers.ModelSerializer):
     class Meta:
          model = ProductImage
          fields =['id','Product','image']
          
class ProductSerializer(serializers.ModelSerializer):
    # Use PrimaryKeyRelatedField for foreign keys
    vendor = serializers.PrimaryKeyRelatedField(queryset=Vendor.objects.all(), required=False)
    category = serializers.PrimaryKeyRelatedField(queryset=ProductCategory.objects.all(), required=False)
    product_rating = serializers.StringRelatedField(many=True, read_only=True)
    product_imgs = ProductImageSerializer(many=True,read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'vendor', 'category', 'title', 'slug', 'tag_list', 'image', 'detail', 'price', 'product_rating', 'demo_url', 'product_file', 'downloads', 'uds_price','publish_status','product_imgs']
        depth = 1  # Optional, if you want to include related data

    # Optional: Initialize with depth if necessary
    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

     #    return instance



class ProductDetailSerializer(serializers.ModelSerializer):
     product_rating = serializers.StringRelatedField(many = True , read_only = True)
     product_imgs = ProductImageSerializer(many=True,read_only=True)
     class Meta:
          model = Product
          fields =['id','vendor','category','title','slug','tag_list','detail','price','image','product_rating','product_imgs','product_file','downloads',"uds_price",'publish_status']
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

class UserSerializer(serializers.ModelSerializer):
     class Meta:
          model = User
          fields =['id','first_name','last_name','username','email']
   



class CustomerDetailSerializer(serializers.ModelSerializer):
     class Meta:
          model = Customer
          fields =['id','user','mobile','profile_img','customer_orders']
     def __init__(self,*args,**kwargs):
          super(CustomerDetailSerializer,self).__init__(*args, **kwargs)
          self.Meta.depth =1
     # def to_representation(self, instance):
     #      response = super().to_representation(instance)
     #      response['user']=UserSerializer(instance.user).data
     #      # response['customer_orders']=OrderSerializer(instance.customer_orders).data
     #      return response


class OrderSerializer(serializers.ModelSerializer):
     class Meta:
          model = Order
          fields =['id','customer','order_time']
     # def __init__(self,*args,**kwargs):
     #      super(OrderSerializer,self).__init__(*args, **kwargs)
     #      self.Meta.depth =1
     
class OrderItemSerializer(serializers.ModelSerializer):
     # order = OrderSerializer()
     # product = ProductDetailSerializer()
     class Meta:
          model = OrderItem
          fields =['id','order','product','qty','price','order_status']
     def to_representation(self, instance):
          response = super().to_representation(instance)
          response['order']=OrderSerializer(instance.order).data
          response['product']=ProductDetailSerializer(instance.product).data
          return response
          


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
          def create(self, validated_data):
        # Custom create logic if needed
             customer = validated_data.get('customer')
             if not customer:
               raise serializers.ValidationError("Customer field is required.")
             return super().create(validated_data)


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



class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ['id',"product","customer"]

    def __init__(self, *args, **kwargs):
        super(WishlistSerializer, self).__init__(*args, **kwargs)

    def to_representation(self, instance):
        # Get the standard representation from the parent class
        response = super().to_representation(instance)
        
        # Add additional fields to the response
        response['customer'] = CustomerSerializer(instance.customer).data
        response['product'] = ProductSerializer(instance.product).data  # Assuming field name is 'product'
        
        return response