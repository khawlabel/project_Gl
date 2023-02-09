
from django.urls import path
from .views import AnnonceList,AnnonceurList,AnnonceurDetail,AnnonceDetail,Annonceur_login,ModaliteList,CategoryList,Mes_AnnonceList,FavoriList,favori,remove
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('annonceur/',AnnonceurList.as_view()),
    path('annonceur/<int:pk>/',AnnonceurDetail.as_view()),
    path('annonce/',AnnonceList.as_view()),
    path('annonce/<int:pk>/',AnnonceDetail.as_view()),
    path('category/',CategoryList.as_view()),
    path('modalite/',ModaliteList.as_view()),
    path('annonceur_login/',Annonceur_login,name='annonceur_login'),
    path('Mes_Annonce/<int:id>/',Mes_AnnonceList.as_view(),name='Mes_Annonce'),
    path('Favori/',FavoriList.as_view(),name='Favori'),
    path('favori/<int:annonce_id>/<int:annonceur_id>/',favori),
    path('remove/<int:annonce_id>/<int:annonceur_id>/',remove),
    #path('articles/',vendre_list.as_view()),
    #path('articles/<int:pk>/',article_detail),
    #path('articles/<int:pk>/',vendre_detail.as_view()),
    path('auth/',obtain_auth_token),
]
