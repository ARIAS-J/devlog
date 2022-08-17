from django.urls import path
from .views import Articles, ArticlesRetrieve, Comments, CommentsRetrieve, Posts, PostsRetrieve
urlpatterns = [
    # Articles Route
    path('articles', Articles),
    path('articles/<int:pk>/', ArticlesRetrieve),
    # Comments Route
    path('comments', Comments),
    path('comments/<int:pk>/', CommentsRetrieve),
    # Posts Route
    path('posts', Posts),
    path('posts/<int:pk>/', PostsRetrieve),
]