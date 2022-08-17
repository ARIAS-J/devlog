from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from drf_yasg.utils import swagger_auto_schema

from .serializers import ArticleSerializer, PostsSerializer, CommentsSerializer
from .models import Articles, Posts, Comments


@swagger_auto_schema(methods=['post'], request_body=ArticleSerializer)
@api_view(['GET', 'POST'])
def Article(request):
    # List
    if request.method == 'GET':
        # Queryset
        article = Articles.objects.all()
        # Serializer
        serializer = ArticleSerializer(article,  many=True)
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
def ArticleRetrieve(request, pk = None):
    # Queryset
    article = Articles.objects.filter(id = pk).first()
    
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

# Posts
@swagger_auto_schema(methods=['post'], request_body=PostsSerializer)
@api_view(['GET', 'POST'])
def Post(request):
    # List
    if request.method == 'GET':
        # Queryset
        post = Posts.objects.all()
        # Serializer
        serializer = PostsSerializer(post,  many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # Create
    elif request.method == 'POST':
        serializer = PostsSerializer(data=request.data)
        
        # Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put'], request_body=PostsSerializer)
@api_view(['GET','PUT', 'DELETE'])
def PostRetrieve(request, pk = None):
    # Queryset
    post = Posts.objects.filter(id = pk).first()
    
    # Validacion
    if post:
        
        # Retrieve
        if request.method == 'GET':
            # Serializer
            serializer = PostsSerializer(post)
            return Response(serializer.data)

        # Update
        elif request.method == 'PUT':
            # Serializer   
            serializer = PostsSerializer(post, data=request.data)
            
            # Validacion
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)

        # Delete
        elif request.method == 'DELETE':
            post.delete()
            return Response({'message':'Post correctly deleted.'}, )

    return Response({'message':'No post found'})


# Comments
@swagger_auto_schema(methods=['post'], request_body=CommentsSerializer)
@api_view(['GET', 'POST'])
def Comment(request):
    # List
    if request.method == 'GET':
        # Queryset
        comment = Comments.objects.all()
        # Serializer
        serializer = CommentsSerializer(comment,  many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # Create
    elif request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        
        # Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put'], request_body=CommentsSerializer)
@api_view(['GET','PUT', 'DELETE'])
def CommentRetrieve(request, pk = None):
    # Queryset
    comment = Comments.objects.filter(id = pk).first()
    
    # Validacion
    if comment:
        
        # Retrieve
        if request.method == 'GET':
            # Serializer
            serializer = CommentsSerializer(comment)
            return Response(serializer.data)

        # Update
        elif request.method == 'PUT':
            # Serializer   
            serializer = CommentsSerializer(comment, data=request.data)
            
            # Validacion
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)

        # Delete
        elif request.method == 'DELETE':
            comment.delete()
            return Response({'message':'Comment correctly deleted.'}, )

    return Response({'message':'No comment found'})