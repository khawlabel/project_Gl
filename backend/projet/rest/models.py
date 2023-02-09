from django.db import models
import datetime
import os
from django.contrib.auth.models import User

class Modalite(models.Model):
    type=models.CharField(max_length=100)
    date=models.DateTimeField(auto_now=True)
    class Meta:
        ordering=['date']
        def __str__(self):
            return self.type
class Category(models.Model):
     name=models.CharField(max_length=100)
     date=models.DateTimeField(auto_now=True)
     class Meta:
        ordering=['date']
     def __str__(self):
        return self.name 
        
class Annonceur(models.Model):
     first_name=models.CharField(max_length=100,default='')
     last_name=models.CharField(max_length=100,default='')
     email=models.EmailField(max_length=254,default='')
     password=models.CharField( max_length=100,default='')
     numero=models.CharField(max_length=50,default='')
     date=models.DateTimeField(auto_now=True)
     class Meta:
        ordering=['date']
     def __str__(self):
        return self.email 

class Annonce(models.Model):
    title=models.CharField(max_length=500)
    modalite=models.ForeignKey(Modalite,on_delete=models.CASCADE,default=1)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,default=1)
    annonceur=models.ForeignKey(Annonceur,on_delete=models.CASCADE,related_name='user_annonce',default=1)
    theme = models.CharField(max_length=100,default='')
    description=models.CharField(max_length=500,default='')
    tarif=models.CharField(max_length=500,default='')
    photo=models.ImageField(upload_to='annonce_img',null=True)
    wilaya=models.CharField(max_length=500,default='')
    commune=models.CharField(max_length=500,default='')
    adresse=models.CharField(max_length=500,default='')
    date=models.DateTimeField(auto_now=True)
    class Meta:
        ordering=['date']
    def __str__(self):
        return self.theme   





class Favori(models.Model):
    annonceur=models.ForeignKey(Annonceur,on_delete=models.CASCADE,related_name='annonceur')
    annonce=models.ForeignKey(Annonce,on_delete=models.CASCADE,related_name='annonce')
    date=models.DateTimeField(auto_now=True)        

      
# Create your models here.
