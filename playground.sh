#!/bin/bash
INPUT_DIR="/Users/jeongjaeseog/Desktop/project/cinelingo/asset-gradient-background"
OUTPUT_DIR="/Users/jeongjaeseog/Desktop/project/cinelingo/asset-gradient-background"


for file in "$INPUT_DIR"/*.png; 
do
  filename=$(basename "$file" .png)

  magick "$file" \
    -resize 1080x \
    -filter Lanczos \
    -attenuate 0.08 +noise Gaussian \
    -quality 98 \
    -define webp:method=6 \
    "$OUTPUT_DIR/$filename.webp"

  # magick "$file" \
  #   -quality 92 \
  #   -define webp:method=6 \
  #   "$OUTPUT_DIR/$filename.webp"
done