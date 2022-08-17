from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from drf_yasg.utils import swagger_auto_schema

from .serializers import ArticleSerializer
from .models import Article


@swagger_auto_schema(methods=['post'], request_body=ArticleSerializer)
@api_view(['GET', 'POST'])
def Articles(request):
    # List
    if request.method == 'GET':
        # Queryset
        clientes = Article.objects.all()
        # Serializer
        serializer = ArticleSerializer(clientes,  many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # Create
    elif request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        
        # Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put'], request_body=ArticleSerializer)
@api_view(['GET','PUT', 'DELETE'])
def ArticlesRetrieve(request, pk = None):
    # Queryset
    article = Article.objects.filter(id = pk).first()
    
    # Validacion
    if article:
        
        # Retrieve
        if request.method == 'GET':
            # Serializer
            serializer = ArticleSerializer(article)
            return Response(serializer.data)

        # Update
        elif request.method == 'PUT':
            # Serializer   
            serializer = ArticleSerializer(article, data=request.data)
            
            # Validacion
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)

        # Delete
        elif request.method == 'DELETE':
            article.delete()
            return Response({'message':'Article correctly deleted.'}, )

    return Response({'message':'No article found'})