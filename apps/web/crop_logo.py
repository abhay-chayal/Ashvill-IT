from PIL import Image

def process_and_crop():
    img_path = r"C:\Users\chaya\.gemini\antigravity-ide\brain\d3186e89-d2a5-4f16-8f54-16490324f133\media__1784455316418.jpg"
    img = Image.open(img_path).convert("RGBA")
    
    # 1. Find bounding box ignoring near-white
    width, height = img.size
    left, top, right, bottom = width, height, 0, 0
    
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Consider it 'content' if it's significantly darker than white
            if min(r, g, b) < 235:
                if x < left: left = x
                if x > right: right = x
                if y < top: top = y
                if y > bottom: bottom = y

    if left >= right or top >= bottom:
        print("Could not find bounding box. Using full image.")
        left, top, right, bottom = 0, 0, width, height
    else:
        # Add a tiny 2px padding
        left = max(0, left - 2)
        top = max(0, top - 2)
        right = min(width, right + 2)
        bottom = min(height, bottom + 2)
        
    print(f"Cropping to bbox: ({left}, {top}, {right}, {bottom})")
    img = img.crop((left, top, right, bottom))
    
    # 2. Make white transparent
    data = img.getdata()
    new_data = []
    
    for item in data:
        r, g, b, a = item
        min_val = min(r, g, b)
        
        if min_val > 210:
            alpha = int(255 * (255 - min_val) / 45)
            alpha = max(0, min(255, alpha))
            if alpha < 255:
                r = int((r * alpha + 76 * (255 - alpha)) / 255)
                g = int((g * alpha + 29 * (255 - alpha)) / 255)
                b = int((b * alpha + 149 * (255 - alpha)) / 255)
            new_data.append((r, g, b, alpha))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    out_path = r"d:\Internship Projects\Ashwil trial\apps\web\public\logo-new.png"
    img.save(out_path, "PNG")
    print(f"Saved cropped and processed logo to {out_path} with size {img.size}")

process_and_crop()
