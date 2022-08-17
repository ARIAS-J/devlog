from django.db import models

# Create your models here.

class Articles(models.Model):
    titulo = models.CharField(max_length=255, null=False)
    descripcion = models.CharField(max_length=150, null=False)
    image = models.ImageField(null=True, blank=False, upload_to='images/')
    
    # Config
    is_whitelist = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)
    
    def __str__(self):
        return f"{self.titulo}"


class Posts(models.Model):
    content = models.CharField(max_length=5000, null=False)
    
    # Relationship
    article_id = models.ForeignKey("Articles", on_delete=models.CASCADE, null=False, blank=False)
    
    # Config
    is_whitelist = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)


class Comments(models.Model):
    content = models.CharField(max_length=600, null=False)
    
    # Relationship
    post_id = models.ForeignKey("Posts", on_delete=models.CASCADE, null=False, blank=False)
    
    # Config
    created_at = models.DateTimeField(auto_now_add=True, null=False)
    update_at = models.DateTimeField(auto_now=True, null=False)