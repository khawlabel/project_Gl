from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from .models import Annonceur,Category,Modalite,Annonce,Favori
from django.contrib.auth.models import User
from .serializers import UserSerializer,ModaliteSerializer,CategorySerializer,AnnonceurSerializer,AnnonceSerializer,FavoriSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from  rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
'''
from rest_framework.decorators import api_view
from rest_framework.decorators import   APIView'''
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
#@csrf_exempt kima csrf li3adna fi django nrml
#as_view()nasta5admouha3llajal django ya9bal ghirdes functuion donckitkoun 3adna une classe lzm ndirouhabah twali 3andou chghoulcommey

class UserList(generics.ListCreateAPIView):
     queryset=User.objects.all()
     serializer_class=UserSerializer
class AnnonceurList(generics.ListCreateAPIView):
     queryset=Annonceur.objects.all()
     serializer_class=AnnonceurSerializer     
class AnnonceurDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset=Annonceur.objects.all()
     serializer_class=AnnonceurSerializer       
class ModaliteList(generics.ListCreateAPIView):
     queryset=Annonceur.objects.all()
     serializer_class=AnnonceurSerializer     
class ModaliteDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset=Modalite.objects.all()
     serializer_class=ModaliteSerializer        
class CategoryList(generics.ListCreateAPIView):
     queryset=Category.objects.all()
     serializer_class=CategorySerializer
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset=Category.objects.all()
     serializer_class=CategorySerializer        

class ModaliteList(generics.ListCreateAPIView):
     queryset=Modalite.objects.all()
     serializer_class=ModaliteSerializer        
        
class AnnonceList(generics.ListCreateAPIView):
     queryset=Annonce.objects.all()
     serializer_class=AnnonceSerializer  
     def get_queryset(self):
         qs=super().get_queryset()
         if 'result' in self.request.GET:
               limit=int(self.request.GET['result'])
               qs=Annonce.objects.all().order_by('-id')[:limit]
               return qs
         else:
               return Annonce.objects.all()
                   
          
     
class AnnonceDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset=Annonce.objects.all()
     serializer_class=AnnonceSerializer 

class Mes_AnnonceList(generics.ListAPIView):
     serializer_class=AnnonceSerializer
     def get_queryset(self):
         return Annonce.objects.filter(annonceur__pk=self.kwargs['id'])
class FavoriList(generics.ListCreateAPIView):
     queryset=Favori.objects.all()
     serializer_class=FavoriSerializer   
     def get_queryset(self):
         qs=super().get_queryset()
         if 'result' in self.request.GET:
               limit=self.request.GET['result']
               qs=Favori.objects.filter(annonceur=limit)
               return qs
      
       

@csrf_exempt      
def Annonceur_login(request):
     email=request.POST['email']
     password=request.POST['password']
     try:
          annonceur=Annonceur.objects.get(email=email,password=password)
     except Annonceur.DoesNotExist :
          annonceur=None
     if annonceur:
          return JsonResponse({'bool':True,'id':annonceur.pk})
     else:
           return JsonResponse({'bool':False})

def favori(request,annonce_id,annonceur_id):
     annonceur=Annonceur.objects.get(id=annonceur_id)
     annonce=Annonce.objects.get(id=annonce_id)
     rq=Favori.objects.filter(annonceur=annonceur,annonce=annonce)
     if rq:
          return JsonResponse({'bool':True})
     else:
           return JsonResponse({'bool':False})           
def remove(request,annonce_id,annonceur_id):
     annonceur=Annonceur.objects.get(id=annonceur_id)
     annonce=Annonce.objects.get(id=annonce_id)
     rq=Favori.objects.filter(annonceur=annonceur,annonce=annonce).delete()
     if rq:
          return JsonResponse({'bool':True})
     else:
           return JsonResponse({'bool':False})    

   
                



                              



     

     

          

    
