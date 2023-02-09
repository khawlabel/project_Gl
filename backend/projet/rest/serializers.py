from rest_framework import serializers
from .models import Category,Modalite,Annonceur,Annonce,Favori
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields = '__all__'       
        
class ModaliteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Modalite
        fields = '__all__'

class AnnonceurSerializer(serializers.ModelSerializer):
    class Meta:
        model=Annonceur
        fields = ['id','first_name','last_name','email','password','numero','user_annonce']
        depth=1

class FavoriSerializer(serializers.ModelSerializer):
    class Meta:
        model=Favori
        fields = ['id','annonce','annonceur']       
        depth=2

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Annonce
        fields = '__all__' 
        depth=2       



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ['id','username','password']
        
