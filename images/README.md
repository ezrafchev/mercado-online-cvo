# Images Directory

This directory contains placeholder images for the Marketplace Cultural Curvelo website.

## Current Images (Placeholders)

All images are 1280x720 JPG files created with colored backgrounds and text labels:

- `artesanato.jpg` - Artesanato Local (Red #E74C3C)
- `musica.jpg` - Música Tradicional (Blue #3498DB)
- `arte.jpg` - Arte Visual (Purple #9B59B6)
- `gastronomia.jpg` - Gastronomia (Orange #F39C12)
- `festividades.jpg` - Festividades (Orange #E67E22)
- `patrimonio.jpg` - Patrimônio Histórico (Teal #16A085)
- `teatro.jpg` - Artes Cênicas (Green #2ECC71)
- `literatura.jpg` - Literatura (Dark Gray #34495E)
- `curvelo.jpg` - Curvelo MG (Purple #8E44AD)
- `maria.jpg` - Maria Silva (Red #C0392B)
- `joao.jpg` - João Santos (Blue #2980B9)
- `ana.jpg` - Ana Ferreira (Green #27AE60)

## Recommendations for Production

### Image Optimization

For production, replace these placeholder images with real photos following these guidelines:

1. **Image Dimensions**: Keep 1280x720px (16:9 aspect ratio) for consistency
2. **File Format**: Use WebP format for better compression (fallback to JPG)
3. **File Size**: Optimize to keep under 200KB per image
4. **Quality**: 80-85% quality is sufficient for web use

### Optimization Tools

- **ImageMagick**: `convert input.jpg -quality 85 -resize 1280x720 output.jpg`
- **WebP Conversion**: `cwebp -q 85 input.jpg -o output.webp`
- **Online Tools**: TinyPNG, Squoosh.app, or ImageOptim

### Responsive Images

Consider implementing responsive images with different sizes:

```html
<img 
  srcset="images/artesanato-400.jpg 400w,
          images/artesanato-800.jpg 800w,
          images/artesanato-1280.jpg 1280w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1280px"
  src="images/artesanato.jpg"
  alt="Artesanato Local">
```

### Image Sources

Recommended sources for authentic Curvelo cultural images:

1. **Local Photography**: Commission local photographers
2. **Wikimedia Commons**: Search for "Curvelo" public domain images
3. **Unsplash/Pexels**: Free stock photos (similar cultural themes)
4. **Partner Submissions**: Accept images from artisans and artists

### Performance

- Images implement lazy loading via `loading="lazy"` attribute
- Error handling provides SVG fallback if image fails to load
- IntersectionObserver is available for advanced lazy loading
