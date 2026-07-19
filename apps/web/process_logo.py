from PIL import Image

def process():
    # We will assume the second media file is the correct JPG. 
    # media__1784455316418.jpg
    img_path = r"C:\Users\chaya\.gemini\antigravity-ide\brain\d3186e89-d2a5-4f16-8f54-16490324f133\media__1784455316418.jpg"
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        r, g, b, a = item
        # Calculate how close to white the pixel is
        min_val = min(r, g, b)
        max_val = max(r, g, b)
        
        if min_val > 210:
            # Fade out alpha for near-white pixels to remove white background with anti-aliasing
            alpha = int(255 * (255 - min_val) / 45)
            alpha = max(0, min(255, alpha))
            
            # To avoid white fringes, we push the color towards the purple (e.g. 91, 33, 182) 
            # as it becomes more transparent. But let's just keep the original color for simplicity,
            # or blend it with a dark purple.
            if alpha < 255:
                # push towards brand purple (76, 29, 149)
                r = int((r * alpha + 76 * (255 - alpha)) / 255)
                g = int((g * alpha + 29 * (255 - alpha)) / 255)
                b = int((b * alpha + 149 * (255 - alpha)) / 255)
                
            new_data.append((r, g, b, alpha))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Save the processed image to the public folder
    out_path = r"d:\Internship Projects\Ashwil trial\apps\web\public\logo-new.png"
    img.save(out_path, "PNG")
    print(f"Saved {out_path}")

process()
