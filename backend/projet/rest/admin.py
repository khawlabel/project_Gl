from django.contrib import admin
from .models import Category,Modalite,Annonceur,Annonce,Favori

admin.site.site_header = "soutien scolaire"
admin.site.site_title = "Cours"
admin.site.index_title = "Manageur"
  
class adminCategory(admin.ModelAdmin):
    list_display=('name','date')

class adminAnnonceur(admin.ModelAdmin):
    list_display = ('first_name','email')    

class adminModalite(admin.ModelAdmin):
    list_display = ('type','date') 

class adminAnnonce(admin.ModelAdmin):
    list_display=('category','theme','description','tarif','modalite','date')
    search_fields = ('theme',) 
    list_editable = ('tarif',)        

class adminFavori(admin.ModelAdmin):
    list_display=('annonceur','annonce') 


admin.site.register(Modalite,adminModalite)    
admin.site.register(Category,adminCategory)  
admin.site.register(Annonce,adminAnnonce) 
admin.site.register(Annonceur,adminAnnonceur) 
admin.site.register(Favori,adminFavori) 
# Register your models here.
