import re

file_path = r'd:\Internship Projects\Ashwil trial\apps\web\src\content\industries.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

images = {
    'finance': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    'healthcare': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    'retail': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    'manufacturing': 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80',
    'education': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    'logistics': 'https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?auto=format&fit=crop&q=80',
    'government': 'https://images.unsplash.com/photo-1523292562811-8fa7962ba5c2?auto=format&fit=crop&q=80',
    'energy': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80'
}

for slug, img_url in images.items():
    pattern = rf"(slug:\s*'{slug}',.*?solutions:\s*\[.*?\])(,?\n\s*\}}\,?)"
    replacement = rf"\1,\n    image: '{img_url}'\2"
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated industries.ts with images.")
