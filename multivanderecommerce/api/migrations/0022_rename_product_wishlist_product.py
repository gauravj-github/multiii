# Generated by Django 5.0.2 on 2025-03-31 07:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_rename_wishlisht_wishlist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wishlist',
            old_name='Product',
            new_name='product',
        ),
    ]
