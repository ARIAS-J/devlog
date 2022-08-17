from rest_framework import serializers

from .models import Articles, Comments, Posts

class ArticleSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_photo_url')
    class Meta:
        model= Articles
        fields= ('id','titulo','descripcion','image_url',)
    
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.image.url

        return request.build_absolute_uri(photo_url)


class PostsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Posts
        fields= '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Comments
        fields= '__all__'