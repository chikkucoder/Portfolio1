# Image Optimization Script
# Run this to compress large images before pushing

# PowerShell script to find large images
Get-ChildItem -Path "Portfolio\assets\images" -Recurse -Include "*.jpg", "*.png" | 
Where-Object { $_.Length -gt 1MB } | 
Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}} |
Sort-Object "Size(MB)" -Descending

# Recommendation: Use online tools like:
# - TinyPNG.com
# - Compressor.io  
# - Squoosh.app
# 
# Or use ImageMagick:
# magick input.jpg -quality 85 -resize 1920x1080> output.jpg