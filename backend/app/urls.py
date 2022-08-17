from django.urls import path
from .views import Article, ArticleRetrieve, Comment, CommentRetrieve, Post, PostRetrieve
urlpatterns = [
    # Articles Route
    path('articles', Article),
    path('articles/<int:pk>/', ArticleRetrieve),
    # Comments Route
    path('comments', Comment),
    path('comments/<int:pk>/', CommentRetrieve),
    # Posts Route
    path('posts', Post),
    path('posts/<int:pk>/', PostRetrieve),
]