import os
import sys
from PIL import Image

def resize_images(input_folder, output_folder, max_size=1200):
    # Make sure output folder exists
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(input_folder):
        if filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".bmp")):
            img_path = os.path.join(input_folder, filename)
            img = Image.open(img_path)

            # Resize while keeping aspect ratio
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)

            # Save to output folder
            save_path = os.path.join(output_folder, filename)
            img.save(save_path, quality=90)

            print(f"Processed: {filename} -> {img.size}")

    print(f"\n✅ All images resized with max side = {max_size}px (aspect ratio preserved)")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python resize_images.py <input_folder> <output_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = sys.argv[2]

    resize_images(input_folder, output_folder)